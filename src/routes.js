const express = require('express');

const routes = express.Router();

const InscritoController = require('./controllers/InscritosController');

routes.get('/teste', (req, res) => {
    return res.send('Comunicação bem sucedida');
});

routes.post('/inscricao', InscritoController.store);
routes.get('/inscritos',InscritoController.get);
routes.get('/inscrito/:id',InscritoController.getInscritoById);

module.exports = routes;