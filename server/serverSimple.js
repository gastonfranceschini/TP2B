const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('Hola mundo');
    response.end();
}).listen(3000, '127.0.0.1');