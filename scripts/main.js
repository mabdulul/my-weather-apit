const weatherDiv = document.querySelector("[data-weather]");
const cityForm = document.querySelector("#cityForm");

const formButton = cityForm.querySelector("button");

formButton.addEventListener("click", function(e) {
    e.preventDefault();
});

function getFormData() {}

function addLocationName(name) {}

function addTemp(temp) {}

function addConditions(conditions) {
    const iconCode = conditions.icon;
    const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
}

function addWind(windSpeed) {}

function addMap(lat, lon) {
    const mapUrl = `http://maps.google.com/maps?q=${lat},${lon}&output=embed`;
    // add an <iframe> element with the src = mapURL
}

function addSunInfo(sunrise, sunset) {}

function readableDate(unixDate) {
    // Use moment.js to convert Unix Date to readable Date
}

function getWeather(location) {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location},US&appid=2f4580c1da2a1471787ee4c356181fd1&units=imperial`;
}

getWeather("Atlanta");
