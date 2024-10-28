const { listarUmCupom, listarTodosCupons } = require('../controllers/cupomController');

const route = require('express').Router();

route.get('/', async (req, res) => {
    res.send(await listarTodosCupons())
})

route.get('/:id', async (req, res) => {
    res.send( await listarUmCupom(req.params.id))
})

route.post('/',(req,res) => {
    res.send(`Criar cupons`)
})

route.put('/', (req,res) => {
    res.send(`Editar cupons`)
})

route.delete('/',(req,res) => {
    res.send(`Deletar cupons`)
})

module.exports = route;


