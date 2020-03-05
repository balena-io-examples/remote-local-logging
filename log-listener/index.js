const express = require('express');
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.text());

app.post('/', (_req, res) => {
    console.log(`${_req.headers.host}: ${_req.body}`);
    return res.sendStatus(200);
});

app.listen(1234, () => {
    console.log('Started remote LAN logging backend');
});
