const weatherDiv = document.querySelector("[data-weather]");
const cityForm = document.querySelector("#cityForm");

const formButton = cityForm.querySelector("button");

formButton.addEventListener("click", function(e) {
    e.preventDefault();
});

function getFormData() {}

function addLocationName(name) {}

function addTemp(temp) {
    // convert kelvin to fahrenheit
}

function addConditions(conditions) {
    const iconCode = conditions.icon;
    const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
}

function addWind(windSpeed) {}

function addMap(lat, lon) {
    const mapUrl = `http://maps.google.com/maps?q=${lat},${lon}&output=embed`;
}

function addSunInfo(sunrise, sunset) {}

function readableDate(unixDate) {}

function getWeather(location) {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location},US&appid=2f4580c1da2a1471787ee4c356181fd1`;
}

getWeather("Atlanta");
