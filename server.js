const express = require("express");
const app = express();
const PORT = 3000;

app.get('/greeting/:name', (req, res) => {
    res.send(`Woah! Hey there, ${req.params.name}!`)
});

app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send(`Your tip should be $${Math.round((req.params.tipPercentage / req.params.total) * 100)} dollars.`)
});

app.listen(PORT)