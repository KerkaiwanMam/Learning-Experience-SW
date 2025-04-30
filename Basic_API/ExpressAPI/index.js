// index.js
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // Middleware to parse JSON bodies

app.get('/', (req, res) => {
    console.log('Request received!');
    res.send('Hello Express!');
});

app.post('/message', (req, res) => {
    console.log('Message received!');
    const { message } = req.body;
    res.send(`Message: ${message}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
