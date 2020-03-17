const fetch = require('node-fetch')
const city = require ("../index");


const getWeather = async (city) =>{
    let data = await fetch
    (`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.APPID}`);
    return await data.json();
} 

module.exports = getWeather;
