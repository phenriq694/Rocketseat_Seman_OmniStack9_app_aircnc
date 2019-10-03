const express = require('express')

const multer = require('multer')
const uploadConfig = require('./config/upload')

const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')


const routes = express.Router()
const upload = multer(uploadConfig)

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

routes.get('/spots', SpotController.index)
routes.post('/spots', upload.single('thumbnail'),SpotController.store)

routes.get('/dashboard', DashboardController.show)

routes.post('/spots/:spot_id/bookings', BookingController.store)

module.exports = routes