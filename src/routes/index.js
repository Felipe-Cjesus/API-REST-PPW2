const express = require('express')
const router = express.Router()
const routes ={
    jogador: require('./crudJogador'),
    pais: require('./crudPais')
} 

//Middleware que converte o body em objeto
router.use(express.json())

router.use('/jogador', routes.jogador)
router.use('/pais', routes.pais)

module.exports = router
