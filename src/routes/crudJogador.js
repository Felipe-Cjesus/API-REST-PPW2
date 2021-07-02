const express = require('express')
const router = express.Router()
const Jogador = require('../models/Jogador')
const axios = require('axios').default

//Middleware que converte o body em objeto
router.use(express.json())

router.get('/', async (req, res, next) => {
    try{

        let filter = {}
        if(req.query.idade) filter.idade = req.query.idade

        const limit = Math.min(parseInt(req.query.limit), 100) || 100
        const skip = parseInt(req.query.skip) || 0
        let jogadores = []
        jogadores = await Jogador.find(filter).limit(limit).skip(skip)

        if(!jogadores){
            res.statusCode = 204
            throw new Error("Lista de jogadores vazia!")
        }

        res.json(jogadores)
    } catch(err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try{
        const id = req.params.id
        const URL = 'https://app-ppw2.herokuapp.com/api/clubes'
        let jogador = await Jogador.findById(id).populate("pais")
        if(!jogador){
            res.statusCode = 404
            throw new Error("O objeto pesquisado não foi encontrado!")
        }
        const { data } = await axios.get(URL)
        let idClube = jogador.clube

        for (let i in data) {
            if(data[i]._id == idClube){
                jogador.clube = data[i]
            }
        }
        res.json(jogador)

    } catch(err) {
        next(err)
    }
})


router.post('/', async (req, res, next) => {
    try{
        const jogador = new Jogador (req.body)
        const resultado = await jogador.save()
        res.json(resultado)
    }catch(err){
        next(err)
    }    
})

router.put('/:id', async (req, res, next) => {
    try{
        const id = req.params.id
        const jogBody = req.body
        const resultado = await Jogador.findByIdAndUpdate(id, jogBody)
        res.json(resultado)
    }catch(err){
        next(err)
    }   
})

router.delete('/:id', async (req, res, next) => {
    try{
        const id = req.params.id
        const resultado = await Jogador.findByIdAndDelete(id)
        res.json(resultado)
    }catch(err){
        next(err)
    }
})

module.exports = router