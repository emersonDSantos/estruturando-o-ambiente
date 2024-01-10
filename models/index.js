const mongoose = require( 'mongoose');
const OrderSchema = require("./pedido");
const ProfileSchema = require("./perfil");
const Pedido = mongoose.model('Pedido', OrderSchema);
const Perfil = mongoose.model('Perfil', ProfileSchema);
const connect = () => {
    mongoose.connect('mongodb://localhost:27017/ebacpizza');
}
module.exports = {
    connect,
    Pedido,
    Perfil
}