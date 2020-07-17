const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
//iniciando o app
const app = express();
//permitir enviar dados para aplicacao no formato json
app.use(express.json());
app.use(cors());

//iniciando o BD
mongoose.connect('mongodb://localhost:27017/nodeapi', 
{ useNewUrlParser: true, useUnifiedTopology: true
});

//biblioteca importa todos os modelos que estao dentro do diretorio models
requireDir('./src/models');

//Toda vez que receber uma req, a partir da rota /api
app.use('/api', require('./src/routes'));

app.listen(3001);
