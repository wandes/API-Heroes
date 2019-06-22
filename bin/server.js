const app = require('../src/app')
const http = require('http');
const debug = require('debug')('nodestr:server');
const cors = require('cors')
const http_port = 8080;

const port =  normalizePort(process.env.PORT || http_port);

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
app.use(cors())
console.log('API rodando na porta ' + port);