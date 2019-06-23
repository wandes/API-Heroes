const app = require('../src/app')
const http = require('http');
const debug = require('debug')('nodestr:server');


const server = http.createServer(app);

const port = process.env.PORT || 8080;

server.listen(port);



console.log('API rodando na porta ' + port);