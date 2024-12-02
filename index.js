const express = require ("express")
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');
const bodyParser = require('body-parser');


const cupomRoutes = require('./src/routes/cupomRoutes')
const usuarioRoutes = require('./src/routes/usuarioRoutes')
const produtoRoutes = require('./src/routes/produtoRoutes')

// const { verificarToken } = require("./src/utils")

app.use(bodyParser.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express,bodyParser.urlencoded({ extend: true}));
app.use(express.json());
app.use('/files', express.static('./src/uploads/produtos_imagem'));
app.use(express.json());


app.get("/", (req, res) => {
    res.redirect ('/docs');
})


app.use("/cupons", cupomRoutes);
app.use('/usuarios',usuarioRoutes)
app.use("produtos", produtoRoutes);

app.listen(8000, () => {
    console.log(`servidor de pé: http://localhost:8000`);
    
})