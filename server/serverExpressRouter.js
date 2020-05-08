const express = require('express');
const chalk = require('chalk');

const app = express();

let port = 3000;

app.get('/', (req, res) => {
    res.send(`
         <html>
            <head></head>
            <body>
            <h1>Hola mundo ${req.query.name}</h1>
            <h1>Apellido: ${req.query.apellido}</h1>
            </body>
        </html>
    `);
});

app.get('/person/:id/:name', (req, res) =>{
    res.send(`
        <html>
            <head></head>
            <body>
                <h1>Person: ${req.params.id}</h1>
                <h1>Person: ${req.params.name}</h1>
            </body>
        </html>
    `);
});

app.get('/api', (req, res) => {
    res.json({fisrtname: 'jhon', lastname: 'Hil'});
})

app.listen(port, () => {console.log(chalk.bgGreen.yellow('Server up!'))});
