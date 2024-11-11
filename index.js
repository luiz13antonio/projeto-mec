const express = require ("express")
const app = express();

const cupomRoutes = require('./src/routes/cupomRoutes')
const usuarioRoutes = require('./src/routes/usuarioRoutes')
app.use(express.json());

app.get("/", (req, res) => {
    res.send ("Olá mundo");
})


app.use("/cupons",cupomRoutes);
app.use('/usuarios',usuarioRoutes)

app.listen(8000, () => {
    console.log(`servidor de pé: http://localhost:8000`);
    
})