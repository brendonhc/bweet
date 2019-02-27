const express = require('express') 

const routes = express.Router();

const BweetController = require('./controller/BweetController')
const LikeController = require('./controller/LikeController')

// GET -> buscar informação
routes.get('/bweets', BweetController.index)

// POST -> Criar um novo registro
routes.post('/bweets', BweetController.store)

routes.post('/likes/:id', LikeController.store)

// PUT -> Atualizar alguma informação
// DELETE -> Deletar alguma informação

module.exports = routes;