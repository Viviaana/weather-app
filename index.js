//IMPORTING HANDLEBARS AND PATH
const hbs = require('express-handlebars');
const path = require('path');
const express = require('express');
const bodyParser = require("body-parser")

const app = express();

require('dotenv').config();

const routes = require('./routes/routes')

//USE PATH TO JOIN THE 2 PATHS - THESE WILL BE STATIC
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', routes)
//SET THE VIEW ENGINE TO HANDLEBARS
app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.listen(3000, () => {
    console.log('server listening on port 3000');
});