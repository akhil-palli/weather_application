const apiKey = 'aee13a7dbf7fbe7ea1b18af2e7c93aec';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});

function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=imperial`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)}°F`;
            descriptionElement.textContent = data.weather[0].description;
            changeBackground();
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function changeBackground(){
    if(descriptionElement.textContent.includes("clear sky")) {
        document.body.style.backgroundImage = "url(https://i.pinimg.com/originals/3a/2a/8f/3a2a8f79d9d4a7d36a258fb129ba36f9.gif)";
    }
    if(descriptionElement.textContent.includes("cloud")) {
        document.body.style.backgroundImage = "url(https://i.makeagif.com/media/8-08-2017/U8cAor.gif)";
    }
    if(descriptionElement.textContent.includes("light rain")) {
        document.body.style.backgroundImage = "url(https://i.makeagif.com/media/8-08-2017/U8cAor.gif)";
    }
    if(descriptionElement.textContent.includes("light rain")) {
        document.body.style.backgroundImage = "url(https://i.makeagif.com/media/8-08-2017/U8cAor.gif)";
    }
    if(descriptionElement.textContent.includes("thunderstorms")) {
        document.body.style.backgroundImage = "url(https://i.makeagif.com/media/8-08-2017/U8cAor.gif)";
    }
    
    


}