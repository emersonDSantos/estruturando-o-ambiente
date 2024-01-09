const express = require('express');
const router = express.Router();

router.get('/', (_, res) => {
    const getAge = (dateString) => {
        const today = new Date();
        const birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {age--;}
        return age;
    }
    res.render('perfil/index', {
        profileName: "Emerson Durães Santos",
        age: getAge('02/05/1991')
    });
});
module.exports = router;