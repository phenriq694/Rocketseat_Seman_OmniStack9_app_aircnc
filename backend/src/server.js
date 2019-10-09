// Importação do módulo Express 
const express = require('express')

// Importação do Mogoose para facilitar o trabalho ocm o MongoDB
const mongoose = require('mongoose')

const cors = require('cors')

const path = require('path')

const routes = require('./routes')


// Criação da aplicação 
const app = express()

//Conexão com o banco de dados MongoDB
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-byatw.mongodb.net/semana09?retryWrites=true&w=majority',
{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

// Permitindo que outras aplicações acessem esta API
app.use(cors())

// Informando para a aplicação Express que as requisições estão utilizando o tipo JSON
app.use(express.json())

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use(routes)

/* Configurando a porta que a aplicação vai ouvir */
app.listen(3000)