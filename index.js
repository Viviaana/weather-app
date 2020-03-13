//IMPORTING HANDLEBARS AND PATH
const hbs = require('express-handlebars');
const path = require('path');
const express = require('express');

const app = express();

require('dotenv').config();
const getWeather = require('./lib/getWeather')

//USE PATH TO JOIN THE 2 PATHS - THESE WILL BE STATIC
app.use(express.static(path.join(__dirname, 'public')));


//SET THE VIEW ENGINE TO HANDLEBARS
app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');


//RENDER THE INDEX.HBS PAGE
app.get('/', async(req, res) =>{
    let data = await getWeather();
    console.log(data)
    res.render('index', {data: "hello from express"});
});

app.listen(3000, () => {
    console.log('server listning on port 3000');
});