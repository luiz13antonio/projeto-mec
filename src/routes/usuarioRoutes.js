const { listarTodosUsuarios, criarUsuario } = require('../controllers/usuarioController');

const router = require('express').Router();

router.get('/', async (req, res) => {
    res.send(await listarTodosUsuarios());
})

router.get('/:id', async (req, res) => {
    res.send(await listarTodosUsuarios());
})

router.post('/',async (req, res) => {
    res.send(await criarUsuario(req.body))

})
module.exports = router;