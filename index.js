const express = require('express');
let routesIndex = require('./routes/index')
let routesUsers = require('./routes/index')

let app = express();

app.listen(3000, '127.0.0.1', () => {

    console.log('Servidor rodando!');

});