const express = require('express');
const chalk = require('chalk');

const app = express();

let port = 3000;

app.use('/', (req, res, next) => {
    console.log('Request URL: ', req.url);
    next();
});

app.use('/public', express.static('./public'));

app.get('/', (req, res) => {
    res.send(`
         <html>
            <head>
                <link href="public/style.css" type="text/css" rel="stylesheet" />
            </head>
            <body>
            <h1>Hola mundo</h1>
            <h1></h1>
            </body>
        </html>
    `);
});

app.listen(port, () => {console.log(chalk.bgGreen.yellow('Server up!'))});
