const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// Servidor express
const app = express()

const server = require('http').Server(app)
// Para o server entender as requisições real-time
const io = require('socket.io')(server) 

// Conexão com o bd
mongoose.connect('mongodb://brendon:node123@ds127825.mlab.com:27825/omnistack-tw',
    {
        useNewUrlParser: true
    }
)

// Modulo de segurança para permitir "outras" aplicações acessarem as informações do backend
app.use(cors())

// Middleware para enviar informações em tempo real para todos usuarios
app.use((req, res, next) => {
    req.io = io
    // Para continuar com as proximas requisições
    return next()
})

// Para o node/express entender o JSON
app.use(express.json())

// Rotas da aplicação
app.use(require("./routes"))

// "server" habilita o frontend ter acesso tanto aos protocolos ws quanto http
server.listen(3000, () => console.log('Servidor iniciado na porta 3000...'))
