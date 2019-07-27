const express = require('express');

const routes = express.Router();

const InscritoController = require('./controllers/InscritosController');
const UsuarioController = require('./controllers/UsuarioController');

routes.get('/teste', (req, res) => {
    return res.send('Comunicação bem sucedida');
});

routes.post('/inscricao', InscritoController.store);
routes.get('/inscritos',InscritoController.get);
routes.get('/inscrito/:id',InscritoController.getInscritoById);
routes.put('/inscrito/confirmacao/:id',InscritoController.confirmarInscricao);

routes.post('/usuario',UsuarioController.store);
routes.put('/login',UsuarioController.getUser);

module.exports = routes;