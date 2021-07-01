const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 8080
const routes = require('./routes')

app.use('/api', routes)

app.get('/', (req, res) => {
    res.json({
        "descricao": "Aplicação de manipulação de Futebol CRUD desenvolvido GET/ GETbyID / PUT / POST / DELETE. Endpoint: /app/",
        "Recurso":{
            "jogador": "/app/jogador",
            "pais": "/app/pais"
        }  
    })
})

app.use(function(err, req, res, next){
    if(res.statusCode == 200){
        res.statusCode = 500
    }
    res.json({erro: err.message})
})

app.listen(PORT, function(){
    console.log('Servidor iniciado na porta ' + PORT)
})