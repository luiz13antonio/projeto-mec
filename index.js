const express = require ("express")
const app = express();

app.get("/", (req, res) => {
    res.send ("Olá mundo");
})

app.get("/boas=vindas", (req, res) => {
    
})


app.listen(8000, () => {
    console.log(`servidor de pé: http://localhost:8000`);
    
})