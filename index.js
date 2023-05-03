const express = require('express');
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

const chefs = require("./data/chefs.json")

app.use(cors());

app.get("/", (req, res) => {
    res.send("Chef Recipe Hunter is running");
})

app.get("/chefs" ,(req, res) =>{
    res.send(chefs);
})

app.get("/chef/:id", (req, res)=>{
    const id = req.params.id;
    console.log(id);
    const selectedChef = chefs.find(c => c.id == id);
    res.send(selectedChef);
})

app.listen(port, () => {
    console.log(`Chef Recipe Hunter API is running on port: ${port}`);
})