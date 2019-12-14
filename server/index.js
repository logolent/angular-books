const express = require('express');
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/index');
const logger = require('./middlewares/logger');

const PORT = 3000;

const server = express();

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

server.use(logger);
server.use('/', indexRoutes);

server.listen(PORT, () => {
    console.log(`running on ${PORT}`);
})