const {Router} = require('express');
const router = Router();

const getWeather = require('../lib/getWeather')

router.get('/', (req, res) =>{
    res.render("index");
});

router.post("/", async(req, res) =>{
    let city = req.body.city
    let code = req.body.code

    let data = await getWeather(city, code);
    console.log(data)

    if (data.cod =="404"){
        res.render('index', {err: data.message})
        return;
    }
    let temp = data.main.temp
    let country = data.sys.country
    let desc = data.weather[0].description
    let name = data.name

    res.render('index', {data:{temp, country, desc, name}});
});

module.exports = router;