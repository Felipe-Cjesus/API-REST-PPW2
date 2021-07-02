const Pais = require('../models/Pais')

const p = new Pais({
    nome: "Espanha",
    continente: "Europa",
    sigla: "BR",
    populacao: 200.000 
})

p.save().then(function(){
    console.log("País salvo")
})
