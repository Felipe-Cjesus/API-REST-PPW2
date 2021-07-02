const mongoose = require('../data')

let paisSchema = new mongoose.Schema({
    nome: String,
    continente: String,
    sigla: String,
    capital: String
}, {timestamps: true})

const Pais = mongoose.model('Pais', paisSchema)
module.exports = Pais