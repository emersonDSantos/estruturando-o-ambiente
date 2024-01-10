const { Schema } = require('mongoose');
const Pedido = new Schema({
    cliente: {
        nome: {
            type: String,
            require: true
        },
        sobrenome: {
            type: String,
            require: true
        }
    },
    pizza: [
        {
            sabor: {
                type: String,
                require: true
            },
            quantidade: {
                type: Number,
                require: true
            },
            tamanho: {
                type: String,
                require: true,
                enum: ['Pequeno', 'Médio', 'Grande']
            },
        }
    ],
    metodoDePagamento: {
        type: String,
        require: true,
        enum: ['Pix', 'Cartão de Crédito']
    },
    total: {
        type: Number,
        require: true
    },
    pago: {
        type: Boolean,
        default: false
    }
}, { collection: 'pedidos' });
module.exports = Pedido;