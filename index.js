const express = require ("express")
const app = express();

const cupomRoutes = require('./src/routes/cupomRoutes')

app.get("/", (req, res) => {
    res.send ("Olá mundo");
})


app.use("/cupons",cupomRoutes);


app.listen(8000, () => {
    console.log(`servidor de pé: http://localhost:8000`);
    
})