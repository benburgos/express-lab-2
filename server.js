const express = require("express");
const app = express();
const PORT = 3000;

app.get('/greeting/:name', (req, res) => {
    res.send(`Woah! Hey there, ${req.params.name}`)
});

app.listen(PORT)