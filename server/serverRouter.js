const http = require('http');
const chalk = require('chalk');
const fs = require('fs');
const port = 3000;

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
  ];

http.createServer((req, res) => {
    // generando end-points o routers
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        let html = fs.readFileSync('./index.htm','utf-8');
        html = html.replace('{mensaje}', 'Hola mundo template');
         //res.write(html);
        res.end(html);
    } else if(req.url === '/api/inventors'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(inventors));
        res.end();
    } else {
        res.writeHead(404);
        res.end();
    }
    
    
}).listen(port, 'localhost', ()=>{
    console.log(chalk.yellow(`Listen port: ${port}`));
});