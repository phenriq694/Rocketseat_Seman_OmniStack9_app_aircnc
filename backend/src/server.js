/* Importação do módulo Express */
const express = require('express')

/* Criação da aplicação */
const app = express()

/* 
 * Utilizando o método GET do Express para pegar o endereço digitado no navegador e 
 * fazer algo com essa informação passando uma função (arrow function) com os parâmetros 'res' de response e 'req' de request, 
 * para tratar as requisições e responder para client. 
 */
app.get('/', (req, res) => {
    return res.json({message : 'Hello World!'})
})

/* Configurando a porta que a aplicação vai ouvir */
app.listen(3000)