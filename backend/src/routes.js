const express = require('express')

const SessionController = require('./controllers/SessionController')

const routes = express.Router()

// Métodos do Express: GET, POST, PUT, DELETE

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação, edição)

/* 
 * Utilizando o método GET do Express para pegar o endereço digitado no navegador e 
 * fazer algo com essa informação passando uma função (arrow function) com os parâmetros 'res' de response e 'req' de request, 
 * para tratar as requisições e responder para client. 
 */
routes.post('/sessions', SessionController.store)

module.exports = routes