const express = require('express')
const router = express.Router()
const Pais = require('../models/Pais')

//Middleware que converte o body em objeto
router.use(express.json())

router.get('/', async (req, res, next) => {
    try{

        let filter = {}
        if(req.query.continente) filter.continente = req.query.continente

        const limit = Math.min(parseInt(req.query.limit), 100) || 100
        const skip = parseInt(req.query.skip) || 0

        let paises = []
        paises = await Pais.find(filter).limit(limit).skip(skip)
        
        if(!paises){
            res.statusCode = 204
            throw new Error("Lista de países vazia!")
        }
    
        res.json(paises)
    } catch(err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try{
        const id = req.params.id
        const pais = await Pais.findById(id)
        if(!pais){
            res.statusCode = 404
            res.json({"msg":"O objeto pesquisado não foi encontrado!"})
        }
        res.json(pais)
    } catch(err) {
        next(err)
    }
})


router.post('/', async (req, res, next) => {
    try{
        const pais = new Pais (req.body)
        const resultado = await pais.save() 
        res.json(resultado)
    }catch(err){
        next(err)
    }    
})

router.put('/:id', async (req, res, next) => {
    try{
        const id = req.params.id
        const pBody = req.body
        const resultado = await Pais.findByIdAndUpdate(id, pBody)
        if(!resultado){
            res.statusCode = 404
            res.json({"msg":"O objeto pesquisado não foi encontrado!"})
        }
        res.json(resultado)
    }catch(err){
        next(err)
    }   
})

router.delete('/:id', async (req, res, next) => {
    try{
        const id = req.params.id
        const resultado = await Pais.findByIdAndDelete(id)
        res.json({"msg":"País Deletado!", "pais": resultado})
        if(!resultado){
            res.statusCode = 404
            res.json({"msg":"O objeto pesquisado não foi encontrado!"})
        }
    }catch(err){
        next(err)
    }
})

module.exports = router