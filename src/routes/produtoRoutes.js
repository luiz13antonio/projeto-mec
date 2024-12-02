const { criarProduto } = require('../controllers/produtocontroller');

const router = require('express').Router();

router.post('/', async (req, res) => {
    res.send("criar produto");
})

module.exports = router;