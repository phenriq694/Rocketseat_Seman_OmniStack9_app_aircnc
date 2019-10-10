// Importação do módulo Express 
const express = require('express')

// Importação do Mogoose para facilitar o trabalho ocm o MongoDB
const mongoose = require('mongoose')

const cors = require('cors')

const path = require('path')

const socketio = require('socket.io')
const http = require('http')

const routes = require('./routes')


// Criação da aplicação 
const app = express()

const server = http.Server(app)

const io = socketio(server)

io.on('connection', socket => {
    console.log('Usuário conectado', socket.id)
})

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
server.listen(3000)