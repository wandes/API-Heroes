const app = require('../src/app')
const http = require('http');
const debug = require('debug')('nodestr:server');

var http_port = 3001;

var port = normalizePort(process.env.PORT || http_port);

app.set('port', port);

//Normalizando a porta
function normalizePort(val) {
  
    var port = parseInt(val, 10);

        if (isNaN(port)) {

            return val;
        }

        if (port >= 0) {
           
            return port;
        }

        return false;
}

const server = http.createServer(app);

server.listen(port);

console.log('API rodando na porta ' + port);