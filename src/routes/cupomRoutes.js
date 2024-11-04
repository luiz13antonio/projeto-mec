const { listarUmCupom, listarTodosCupons, criarUmCupom, editarUmCupom, deletarUmCupom } = require('../controllers/cupomController');

const route = require('express').Router();

route.get('/', async (req, res) => {
    res.send(await listarTodosCupons())
})

route.get('/:id', async (req, res) => {
    res.send( await listarUmCupom(req.params.id))
})

route.post('/', async (req,res) => {
    res.send(await criarUmCupom(req.body))
})

route.put('/:id',async (req,res) => {
    res.send(await editarUmCupom(req.body, req.params.id))
})

route.delete('/:id',async(req,res) => {
    res.send(await deletarUmCupom(req.params.id))
})

module.exports = route;


