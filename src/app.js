const express = require('express'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 
const app = express();
const router = express.Router();

//Abrindo conexao com o mongodb
/*mongoose.connect('mongodb+srv://deploy:uploaddeploy@cluster0-ahrpu.azure.mongodb.net/test?retryWrites=true&w=majority' ,{ useNewUrlParser: true }).then(({})=>{
    console.log("Conectado ao mongodb")
}).catch((erro)=>{
    console.error("Error ao conetar ao monogodb" + erro)
})*/

//Carregando os Models
const Heroes = require('./models/Heroes')

//carregando as Rotas
const index = require('./routes/index')
const heroRoute = require('./routes/Heroes-routes')


//Convertendo o corpo da requisição para json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}));

//rotas
app.use('/', index); 
app.use('/heroes', heroRoute); 

module.exports = app;