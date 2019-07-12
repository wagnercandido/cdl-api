const mongoose = require('mongoose');

const Inscrito = new mongoose.Schema(
    {
        nome: {
            type: String,
            required
        },
        idade: {
            type: Number
        },
        email: {
            type: String
        },
        telefone: {
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
        motivo_participacao: {
            type: String
        },

        rua: {
            type: String
        },
        numero: {
            type: String
        },
        cep: {
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
    }, {
        timestamps: true
    }
);

module.exports = mongoose.model('Inscrito', Inscrito);