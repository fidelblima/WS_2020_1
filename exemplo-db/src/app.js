const express = require ('express');
const cors = require('cors');
const logger = require('morgan');
const mongoSanitize = require('express-mongo-sanitize');
const bodyParser = require('body-parser');

    require('./db/config');

    const app = express();

    app.use(cors());
    app.use(logger('dev'));

    //define que os dados recebidos no corpo da requisição deve estar no formato json

    app.use(bodyParser.json());

    //Proteje os acessos ao banco de dados contra injeções de consultas maliciosas

    app.use(mongoSanitize());
    app.get('/', (req, res) => res.send('Oi!'));

    module.exports = app;