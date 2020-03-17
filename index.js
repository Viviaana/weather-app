//IMPORTING HANDLEBARS AND PATH
const hbs = require('express-handlebars');
const path = require('path');
const express = require('express');
const bodyParser = require("body-parser")

const app = express();

require('dotenv').config();
const getWeather = require('./lib/getWeather')

//USE PATH TO JOIN THE 2 PATHS - THESE WILL BE STATIC
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//SET THE VIEW ENGINE TO HANDLEBARS
app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');


//RENDER THE INDEX.HBS PAGE
app.get('/', (req, res) =>{
    res.render("index");
});

app.post("/", async(req, res) =>{
    let city = req.body.city
    let data = await getWeather();

    let temp = data.main.temp
    let country = data.sys.country
    let desc = data.weather[0].description
    let name = data.name

    res.render('index', {data:{temp, country, desc, name}});
});

app.listen(3000, () => {
    console.log('server listening on port 3000');
});