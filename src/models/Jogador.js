const mongoose = require('../data')

let jogadorSchema = new mongoose.Schema({
    nome: String,
    idade: Number,
    posicao: Array,
    num_camisa: Number,
    clube: Object,
    nacionalidade: String
}, {timestamps: true})

const Jogador = mongoose.model('Jogador', jogadorSchema)
module.exports = Jogador