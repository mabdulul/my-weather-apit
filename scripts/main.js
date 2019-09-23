const weatherDiv = document.querySelector("[data-weather]");
const cityForm = document.querySelector("#cityForm");

const formButton = cityForm.querySelector("button");

formButton.addEventListener("click", function(e) {
    e.preventDefault();
    getWeather(getFormData());
});

function getFormData() {
    return cityForm.querySelector("input[type='text']").value;
}

function addLocationName(name) {
    const locationElement = document.createElement("p");
    locationElement.innerHTML = `Location: ${name}`;
    weatherDiv.append(locationElement);
}

function addTemp(temp) {
    const tempElement = document.createElement("p");
    const fahrenheit = Math.floor((temp - 273) * (9 / 5) + 32);

    tempElement.innerHTML = `Temp: ${fahrenheit}&deg;`;
    weatherDiv.append(tempElement);
}

function addConditions(conditions) {
    const iconCode = conditions.icon;
    const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
    const iconImage = document.createElement("img");
    const conditionsHeader = document.createElement("h2");

    iconImage.src = iconUrl;
    conditionsHeader.innerHTML = `Current Conditions: ${conditions.description}`;
    conditionsHeader.append(iconImage);

    weatherDiv.append(conditionsHeader);
}

function addWind(windSpeed) {
    const windSpeedElement = document.createElement("p");

    windSpeedElement.innerHTML = `Wind Speed (mph): ${windSpeed}`;
    weatherDiv.append(windSpeedElement);
}

function addMap(lat, lon) {
    const mapUrl = `http://maps.google.com/maps?q=${lat},${lon}&output=embed`;
    const myMap = document.createElement("iframe");

    myMap.src = mapUrl;
    weatherDiv.append(myMap);
}

function addSunInfo(sunrise, sunset) {
    const sunInfoElement = document.createElement("ul");
    const sunriseElement = document.createElement("li");
    const sunsetElement = document.createElement("li");
    sunriseElement.innerHTML = `Sunrise: ${readableDate(sunrise)}`;
    sunsetElement.innerHTML = `Sunset: ${readableDate(sunset)}`;
    sunInfoElement.append(sunriseElement);
    sunInfoElement.append(sunsetElement);

    weatherDiv.append(sunInfoElement);
}

function readableDate(unixDate) {
    return moment.unix(unixDate).format("dddd, MMMM Do, YYYY @ h:mm:ss A");

    // dateObj = new Date(unixDate * 1000);

    // const hours = dateObj.getHours();
    // const minutes = "0" + dateObj.getMinutes();
    // const time = hours + ":" + minutes.substr(-2);
    // return time;
}

function getWeather(location) {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location},US&appid=2f4580c1da2a1471787ee4c356181fd1`;

    const weatherData = get(URL);

    weatherData.then(function(data) {
        console.log("data: ", data);

        const line = document.createElement("hr");
        weatherDiv.append(line);
        addLocationName(data.name);
        addConditions(data.weather[0]);
        addTemp(data.main.temp);
        addWind(data.wind.speed);
        addMap(data.coord.lat, data.coord.lon);
        addSunInfo(data.sys.sunrise, data.sys.sunset);
        return data;
    });
}

getWeather("Atlanta");
