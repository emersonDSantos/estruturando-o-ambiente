const express = require('express');
const path = require('path');
const routerPrincipal = require('./routes/principal');
const routerPedido = require('./routes/pedido');
const routerPerfil = require('./routes/perfil');
const { connect }  = require('./models');
const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', routerPrincipal);
app.use('/pedido', routerPedido);
app.use('/perfil', routerPerfil);

app.listen(port, () => {
    connect();
    console.log(`Server in ${port} port`);
});
