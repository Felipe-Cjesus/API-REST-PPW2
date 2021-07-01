const mongoose = require('../data')

let paisSchema = new mongoose.Schema({
    nome: String,
    continente: String,
    sigla: String,
    populacao: Number    
}, {timestamps: true})

const Pais = mongoose.model('Pais', paisSchema)
module.exports = Pais