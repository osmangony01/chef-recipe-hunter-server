const express = require('express');
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

const chef_recipes = require("./data/chef_with_recipes.json");

app.use(cors());

app.get("/", (req, res) => {
    res.send("Chef Recipe Hunter is running");
})

app.get("/chefs" ,(req, res) =>{
    res.send(chef_recipes);
})

app.get("/chef/:id", (req, res)=>{
    const id = req.params.id;
    console.log(id);
    const selectedChef = chef_recipes.find(c => c.id == id);
    res.send(selectedChef);
})

app.listen(port, () => {
    console.log(`Chef Recipe Hunter API is running on port: ${port}`);
})