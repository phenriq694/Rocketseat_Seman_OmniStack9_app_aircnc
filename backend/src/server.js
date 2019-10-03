// Importação do módulo Express 
const express = require('express')

const routes = require('./routes')

// Criação da aplicação 
const app = express()

// Informando para a aplicação Express que as requisições estão utilizando o tipo JSON
app.use(express.json())

app.use(routes)

/* Configurando a porta que a aplicação vai ouvir */
app.listen(3000)