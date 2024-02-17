const apikey="0fb743baa00563ab3020169211bb01c4";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button")

const weathericon = document.querySelector(".weather-icon");

async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404)
    {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else
    {
        var data = await response.json();
        document.querySelector('.city').innerHTML=data.name;
        document.querySelector('.temp').innerHTML=Math.round(data.main.temp) + "°C";
        document.querySelector('.humidity').innerHTML=data.main.humidity + "%";
        document.querySelector('.wind').innerHTML=data.wind.speed + "km/h";
    
        if(data.weather[0].main=="Clouds")
    {
        weathericon.src = "picture/clouds.png";
    }
    else if(data.weather[0].main=="Clear")
    {
        weathericon.src = "picture/clear.png";
    }
    else if(data.weather[0].main=="Drizzle")
    {
        weathericon.src = "picture/drizzle.png";
    }
    else if(data.weather[0].main=="Mist")
    {
        weathericon.src = "picture/mist.png";
    }
    else if(data.weather[0].main=="Rain")
    {
        weathericon.src = "picture/rain.png";
    }
    else if(data.weather[0].main=="Snow")
    {
        weathericon.src = "picture/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}
    }
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value)
})