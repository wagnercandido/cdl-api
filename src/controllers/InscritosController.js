const Inscrito = require('../models/Inscritos');

class InscritoController {
    async get(req, res) {
        const inscritos = await Inscrito.find().sort('-createdAt');
        return res.json(inscritos);
    }

    async store(req, res) {
        const { nome, idade, telefone, email,
            rua, numero, bairro, cidade, estado,
            restricao, comunidade, funcao, motivo, pagamento
        } = req.body;

        const inscrito = await Inscrito.create({ nome, idade, telefone, email,
            rua, numero, bairro, cidade, estado,
            restricao, comunidade, funcao, motivo, pagamento
        });

        return res.json(inscrito);
    }

    async getInscritoById(req, res) {
        const inscrito = await Inscrito.findById(req.params.id);
        return res.json(inscrito);
    }
}

module.exports = new InscritoController();