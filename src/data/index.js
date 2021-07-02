const mongoose = require('mongoose')
require('dotenv').config()
const options = {useNewUrlParser: true, useUnifiedTopology: true}
//const URL = 'mongodb+srv://felipecjesus:Iucteo9ShGJgZte4@cluster0.b4g9c.mongodb.net/ProjetoFinalPPWII?retryWrites=true&w=majority'

mongoose.connect(process.env.DBFELIPE, options, function(err){
    if(!err){
        console.log("Conectado ao Banco")
    }
})

module.exports = mongoose