const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
    99 Bottles of beer on the wall
    <a href="/98">take one down, pass it around</a>
    `)
});

app.get('/:number_of_bottles', (req, res) => {
    Number(req.params.number_of_bottles) === 0 ?
        res.send(`
        ${req.params.number_of_bottles} bottles of beer on the wall
        <a href="/">start over!</a>
        `):
    res.send(`
        ${req.params.number_of_bottles} bottles of beer on the wall
        <a href="${req.params.number_of_bottles - 1}">take one down, pass it around</a>
    `)
});

app.listen(port);