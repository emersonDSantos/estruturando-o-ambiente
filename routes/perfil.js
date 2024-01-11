const express = require('express');
const { Perfil } = require('../models');
const router = express.Router();
router.get('/', (_, res) => {
    Perfil.find({}).limit(1).then((perfil) => {
        res.render('perfil/index', {
            perfil: perfil
        });
    });
});
module.exports = router;
