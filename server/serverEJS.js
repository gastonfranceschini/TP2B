const express = require('express');
const chalk = require('chalk');

const app = express();

let port = 3000;

app.set('view engine', 'ejs');
app.use('/assets', express.static('./public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/person/:id', (req, res) => {
    res.render('index', {ID: req.params.id});
})

app.listen(port, () => {console.log(chalk.bgGreen.yellow('Server up!'))});
