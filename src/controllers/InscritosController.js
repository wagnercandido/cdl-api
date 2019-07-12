const Inscrito = require('../models/Inscritos');

class InscritoController {
    async getInscritos(req, res) {
        const inscritos = await Inscrito.find().sort('-createdAt');
        return res.json(inscritos);
    }

    async store(req, res) {
        const { nome, idade, email,
            telefone, restricao, comunidade,
            funcao, motivo_participacao, rua,
            numero, cep, bairro, cidade, estado } = req.body;

        const inscrito = await Inscrito.create({
            nome, idade, email,
            telefone, restricao, comunidade,
            funcao, motivo_participacao, rua,
            numero, cep, bairro, cidade, estado
        });

        return res.json(inscrito);
    }

    async showInscrito(req, res) {
        const inscrito = await Inscrito.findById(req.params.id);
        return res.json(inscrito);
    }
}

module.exports = new InscritoController();