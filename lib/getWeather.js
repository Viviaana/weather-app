const fetch = require('node-fetch')
const city = require ("../index");


const getWeather = async () =>{
    let data = await fetch("http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=26b2086466dbaad94b14b83921d6a235");
    return await data.json();
} 

module.exports = getWeather;
