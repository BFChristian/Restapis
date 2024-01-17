const express = require("express");
const router = require('./routes/index.js');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//conectar mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/restapis'), {
    useNewUrlParser: true
}

//crear el servidor
const app = express();

//habilitar bodyparser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//rutas de la app
app.use('/', router());

//puerto
app.listen(5000);