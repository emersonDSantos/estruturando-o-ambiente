const { Schema } = require('mongoose');
const Perfil = new Schema({
    nome: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    }
}, { collection: 'perfil' });
module.exports = Perfil;