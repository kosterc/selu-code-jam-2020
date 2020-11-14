// Library Imports
const express = require('express');
const fs = require('fs');
const http = require('http');
const https = require('https');
const morgan = require('morgan');

// dotenv init
require('dotenv').config();

// Morgan init
var logger = morgan('combined');

// Express Init
var app = express();

app.use(logger);

app.use(express.static('build'));
app.use(express.static('public'));

app.use((req, res) => res.status(400).send({
    Status: 404,
    Message: 'The requested resource could not be found on this server.'
}));


// HTTP & HTTPS init
var httpServ = http.createServer(app);

/*var httpsServ = https.createServer({
    key: fs.readFileSync('Root.key'),
    cert: fs.readFileSync('Root.crt')
}, app);*/

// Listen on server
const httpPort = process.env.HTTP_PORT || 80;
//const httpsPort = process.env.HTTPS_PORT || 443;

httpServ.listen(httpPort, () => console.log(`Listening on *:${httpPort}`));
//httpsServ.listen(httpsPort, () => console.log(`Listening on *:${httpsPort}`));