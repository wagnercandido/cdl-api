const Usuario = require('../models/Usuario');

class UsuarioController {
    async store(req, res) {
        const { usuario, senha, nome } = req.body;
        console.log('requisicao', req.body);

        const cadastro = await Usuario.create({ usuario, senha, nome });
        return res.json(cadastro);
    }

    async getUser(req, res) {

        const { usuario, senha } = req.body;

        await Usuario.findOne({ usuario: String(usuario) }, function (err, data) {
            if (err) {
                return res.json({ status: 500, response: 'Erro Inesperado, contacte o administrador' });
            }
            if (data) {
                if (senha === data.senha) {
                    return res.json({ status: 200, response: 'success', user: data.nome, _id: data._id });
                }
                return res.json({ status: 401, response: 'Senha Incorreta' });
            }
            return res.json({ status: 404, response: 'Usuário não encontrado' })
        });

    }
}

module.exports = new UsuarioController();