const fetch = require('node-fetch')
const city = require ("../index");


const getWeather = async (city) =>{
    let data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&${process.env.APPID}`);
    console.log(data)
    // return await data.json();
} 

module.exports = getWeather;
