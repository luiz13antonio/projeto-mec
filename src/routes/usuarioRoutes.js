const { listarTodosUsuarios, criarUsuario } = require('../controllers/usuarioController');

const router = require('express').Router();

router.get('/', async (req, res) => {
    //#swagger.description = 'REtorna lista de usuarios'
    res.send(await listarTodosUsuarios());
})

router.get('/:id', async (req, res) => {
    res.send(await listarTodosUsuarios());
})

router.post('/', async (req, res) => {
    res.send(await criarUsuario(req.body))
    // #swagger.description = 'Criar um usuario'
    /* #swagger.parameters['obj']= {
    in: 'body' ,
    schema: {
        $usuario_email: "email@email.com",
        $usuario_senha: "min-8 dig+1-letra-maiuscula+1=alfanumerico",
        $usuario_nome: "Nome do Usuario",
    }
    }*/

})
module.exports = router;