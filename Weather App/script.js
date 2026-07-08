// Selecting elements from your HTML
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-btn');
const cityName = document.querySelector('.city-name');
const currentTemp = document.querySelector('.current-temp');
const currentDesc = document.querySelector('.current-desc');
const days = document.querySelectorAll('.day p');
const currentIcon = document.querySelector('.current-icon');

// OpenWeatherMap API Key
const apiKey = "490da8417eb6e28eff28c33d765a7a9c";

searchButton.addEventListener('click', function () {

    const city = searchInput.value.trim();

    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    // Current Weather
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {

            if (data.cod != 200) {
                alert("City not found!");
                return;
            }

            cityName.textContent = data.name;

            currentTemp.textContent =
                `Temperature: ${data.main.temp.toFixed(2)}°C`;

            currentDesc.textContent =
                data.weather[0].description;

            const weatherMain = data.weather[0].main;

            console.log( weatherMain);

            if (weatherMain === "Clear") {
                currentIcon.src = "images/sun.png";
            }
            else if (weatherMain === "Rain") {
                currentIcon.src = "images/rain.png";
            }
            else {
                currentIcon.src = "images/cloud.png";
            }
        })
        .catch(error => {
            console.log(error);
            alert("Something went wrong!");
        });

    // Forecast
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {

            if (data.cod != "200") {
                return;
            }

            days[0].textContent =
                data.list[0].main.temp.toFixed(0) + "°C";

            days[1].textContent =
                data.list[8].main.temp.toFixed(0) + "°C";

            days[2].textContent =
                data.list[16].main.temp.toFixed(0) + "°C";
        })
        .catch(error => {
            console.log(error);
        });

});