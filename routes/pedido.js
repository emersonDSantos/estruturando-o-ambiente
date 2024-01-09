const express = require('express');
const router = express.Router();
router.get('/', (_, res) => {
    res.render('pedido/index', {
        userName: "Emerson Santos"
    });
});
module.exports = router;