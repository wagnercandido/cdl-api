const mongoose = require('mongoose');

const Usuario = new mongoose.Schema({
    usuario: { type: String },
    senha: { type: String },
    nome: { type: String }
});

module.exports = mongoose.model('Usuario', Usuario);