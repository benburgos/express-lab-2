const express = require("express");
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//     res.send(`
//     99 Bottles of beer on the wall
//     <a href="/98">take one down, pass it around</a>
//     `)
// });

// app.get('/:number_of_bottles', (req, res) => {
//     Number(req.params.number_of_bottles) === 0 ?
//         res.send(`
//         ${req.params.number_of_bottles} bottles of beer on the wall
//         <a href="/">start over!</a>
//         `):
//     res.send(`
//         ${req.params.number_of_bottles} bottles of beer on the wall
//         <a href="${req.params.number_of_bottles - 1}">take one down, pass it around</a>
//     `)
// });

app.get('/', (req, res) => {
    let randomNum = 98 + (Math.floor(Math.random() * 100));
    res.send(`
    99 little bugs in the code,
    99 little bugs!
    Take one down,
    Patch it around,
    ${randomNum} bugs in the code!
    <a href="/${randomNum}">Oh god, get another patch in!</a>
    `)
});

app.get('/:number_of_bugs', (req, res) => {
    let randomNum = Number(req.params.number_of_bugs) + Math.floor(Math.random() * 100)
    Number(req.params.number_of_bugs) === 0 ?
        res.send(`
        Somehow, you managed to fix all the bugs...
        <a href="/">start over!</a>
        `):
        res.send(`
        ${req.params.number_of_bugs} little bugs in the code,
        ${req.params.number_of_bugs} little bugs!
        Take one down,
        Patch it around,
        ${randomNum} bugs in the code!
        <a href="/${randomNum}">Oh god, get another patch in!</a>
        `)
});

app.listen(port);