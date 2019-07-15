const mongoose = require('mongoose');

const Inscrito = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        idade: {
            type: Number
        },
        telefone: {
            type: String,
            required: true
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
    }, {
        timestamps: true
    }
);

module.exports = mongoose.model('Inscrito', Inscrito);