const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const indexRoutes = require('./routes/index');
const logger = require('./middlewares/logger');

const PORT = process.env.PORT || 3000;

const server = express();

server.use(cors());
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

server.use(logger);
server.use('/', indexRoutes);

server.listen(PORT, () => {
    console.log(`running on ${PORT}`);
})