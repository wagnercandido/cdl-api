const Inscrito = require('../models/Inscritos');

class InscritoController {
    async get(req, res) {
        const inscritos = await Inscrito.find().sort('-createdAt');
        return res.json(inscritos);
    }

    async store(req, res) {
        const { nome, idade, telefone,
            restricao, comunidade,
            funcao, motivo, rua,
            numero, bairro, cidade, estado } = req.body;

        const inscrito = await Inscrito.create({
            nome, idade, telefone,
            restricao, comunidade,
            funcao, motivo, rua,
            numero, bairro, cidade, estado
        });

        return res.json(inscrito);
    }

    async getInscritoById(req, res) {
        const inscrito = await Inscrito.findById(req.params.id);
        return res.json(inscrito);
    }
}

module.exports = new InscritoController();