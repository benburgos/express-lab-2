const express = require("express");
const app = express();
const PORT = 3000;

app.get('/greeting/:name', (req, res) => {
    res.send(`Woah! Hey there, ${req.params.name}!`)
});

app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send(`Your tip should be $${Math.round((req.params.tipPercentage / req.params.total) * 100)} dollars.`)
});

app.get('/magic/:question', (req, res) => {
    let magicGuesses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];
    res.send(`
        <h1>You asked: ${req.params.question}?</h1>
        <h1>The Magic 8 Ball says: ${magicGuesses[Math.floor(Math.random() * magicGuesses.length)]}</h1>
        `)
});

// Fibonacci

app.get('/fibonacci/:number', (req, res) => {
    let workingNumber = Number(req.params.number);
    function perfectSquare(n) {
        let squareRt = Math.floor(Math.sqrt(n))
        return (squareRt * squareRt === n)
    }
    perfectSquare(5 * workingNumber * workingNumber + 4) ||
    perfectSquare(5 * workingNumber * workingNumber - 4) ?
    res.send("Very good. It is Fibonacci."):
    res.send("I can tell this is not a fibonacci number.")
});

app.listen(PORT)