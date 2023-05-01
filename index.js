const express = require('express');
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
    res.send("Chef Recipe Hunter is running");
})


app.listen(port, () => {
    console.log(`Chef Recipe Hunter API is running on port: ${port}`);
})