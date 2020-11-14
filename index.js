// Library Imports
let bodyParser = require('body-parser');
let express = require('express');
let http = require('http');
let morgan = require('morgan');

// Setup .env
require('dotenv').config();

// Morgan Logging
let logger = morgan('combined');

// Setup Express
var app = express();

app.use(logger);
app.use(bodyParser.json());

// Serve the React Build Folders
app.use(express.static('build'));
app.use(express.static('public'));

// 404 Error Handler
app.use((req, res) => {
    res.status(404).send({
        status: 404,
        message: 'requested resource could not be found on this server'
    });
});

// Setup HTTP server
let httpServ = http.createServer(app);
let httpPort = process.env.HTTP_PORT || 80;

httpServ.listen(httpPort, () => console.log(`Listening on *:${httpPort}`));