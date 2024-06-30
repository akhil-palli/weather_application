const apiKey = 'aee13a7dbf7fbe7ea1b18af2e7c93aec';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.querySelector('.weather-info .location');
const descriptionElement = document.querySelector('.weather-info .description');
const temperatureElement = document.querySelector('.weather-info .temperature');

//click search button to search
searchButton.addEventListener('click', fetchWeather);

//enter to search
locationInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        fetchWeather();
    }
});

function fetchWeather() {
    const location = locationInput.value;
    if (!location) {
        return;
    }

    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=imperial`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)}°F`;
            descriptionElement.textContent = data.weather[0].description;
            changeBackgroundAndIcon();

        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('myImg').src = 'content/LocationNotFound.png';
            locationElement.textContent = 'Location Not Found!';
            temperatureElement.textContent = '';
            descriptionElement.textContent = '';
        });
}

//updates backgrounds and weather icons
function changeBackgroundAndIcon() {
    if (descriptionElement.textContent.includes("clear sky")) {
        // document.body.style.backgroundImage = "url(https://i.pinimg.com/originals/3a/2a/8f/3a2a8f79d9d4a7d36a258fb129ba36f9.gif)";
        document.body.style.backgroundImage = "url('content/sun-pic.jpg')";
        document.getElementById('myImg').src = 'content/clear.png';
    }
    if (descriptionElement.textContent.includes("cloud")) {
        // document.body.style.backgroundImage = "url(https://i.makeagif.com/media/8-08-2017/U8cAor.gif)";
        document.body.style.backgroundImage = "url('content/clouds-pic.jpg')";
        document.getElementById('myImg').src = 'content/cloud.png';
    }
    if (descriptionElement.textContent.includes("rain")) {
        // document.body.style.backgroundImage = "url(https://i.makeagif.com/media/8-08-2017/U8cAor.gif)";
        document.body.style.backgroundImage = "url('content/raining-pic.jpg')";
        document.getElementById('myImg').src = 'content/rain.png';
    }
    if (descriptionElement.textContent.includes("thunderstorms")) {
        // document.body.style.backgroundImage = "url(https://i.makeagif.com/media/8-08-2017/U8cAor.gif)";
        document.body.style.backgroundImage = "url('content/thunderstorm-pic.jpg')";
        document.getElementById('myImg').src = 'content/rain.png';
    }
}

