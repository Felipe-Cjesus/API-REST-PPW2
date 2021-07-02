const Jogador = require('../models/Jogador')

const Jog = new Jogador({
    nome: "Felipe",
    idade: 30,
    posicao: ["Atacante", "Ponta Esquerdo", "Segundo Atacante"],
    num_camisa: 11,
    clube: "Barcelona",
    nacionalidade: "Brasileiro"
})

Jog.save().then(function(){
    console.log("Jogador Salvo")
})