const mongoose = require('mongoose');

const Inscrito = new mongoose.Schema(
    {
        nome: {
            type: String,
        },
        idade: {
            type: Number
        },
        telefone: {
            type: String,
        },
        email: {
            type: String,
        },

        rua: {
            type: String
        },
        numero: {
            type: String
        },
        bairro: {
            type: String
        },
        cidade: {
            type: String
        },
        estado: {
            type: String
        },

        restricao: {
            type: String
        },
        comunidade: {
            type: String
        },
        funcao: {
            type: String
        },
        motivo: {
            type: String
        },
        pagamento: {
            type: String
        },
        confirmado: {
            type: Boolean
        }
    }, {
        timestamps: true
    }
);

module.exports = mongoose.model('Inscrito', Inscrito);