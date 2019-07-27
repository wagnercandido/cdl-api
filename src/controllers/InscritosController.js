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

        const inscrito = await Inscrito.create({
            nome, idade, telefone, email,
            rua, numero, bairro, cidade, estado,
            restricao, comunidade, funcao, motivo, pagamento
        });

        return res.json(inscrito);
    }

    async getInscritoById(req, res) {
        const inscrito = await Inscrito.findById(req.params.id);
        return res.json(inscrito);
    }

    async confirmarInscricao(req, res) {
        // let inscrito = '';
        await Inscrito.findById(req.params.id).then((inscricao) => {
            if (inscricao.confirmado) {
                Inscrito.updateOne(
                    { '_id': inscricao._id },
                    { $set: { 'confirmado': !inscricao.confirmado } },
                ).then((response) => {
                    return res.json(response);
                })
            } else {
                Inscrito.updateOne(
                    { '_id': inscricao._id },
                    { $set: { 'confirmado': true } },
                    { upsert: true }
                ).then((response) => {
                    return res.json(response);
                })
            }
        })
    }
}

module.exports = new InscritoController();