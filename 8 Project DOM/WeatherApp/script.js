const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const apiKey = "7e1b451fdca31bdf15aff9b7b8572d20";
const cloudImg = document.querySelector(".cloud-img");
let data;
async function getWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = 'block';
        document.querySelector(".weather").style.display = 'none'
    } else {
        
        
        data = await response.json();
        document.querySelector(".error").style.display = 'none';
        document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`
        document.querySelector(".city").innerHTML = `${data.name}`
        document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`
        document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`
        if (data.weather[0].main == 'Clouds')
            cloudImg.src = `images/clouds.png`
        else if (data.weather[0].main == 'Clear')
            cloudImg.src = `images/clear.png`
        else if (data.weather[0].main == 'Rain')
            cloudImg.src = `images/rain.png`
        else if (data.weather[0].main == 'Drizzle')
            cloudImg.src = `images/drizzle.png`
        else if (data.weather[0].main == 'Mist')
            cloudImg.src = `images/mist.png`

    }
}

const input = document.querySelector("#location");
const btn = document.querySelector("Button");
btn.addEventListener("click", () => {
    getWeather(input.value);
    document.querySelector(".weather").style.display = 'block';
})