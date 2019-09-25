const weatherDiv = document.querySelector("[data-weather]");
const cityForm = document.querySelector("#cityForm");
const formButton = cityForm.querySelector("button");
const CancelButton = cityForm.querySelector("#rest-data");

formButton.addEventListener("click", function(e) {
    e.preventDefault();
    const theLocation = document.getElementById("search-input").value;
    getWeather(theLocation);
    console.log("the form is submit", theLocation);

});


CancelButton.addEventListener("click", function(){ 
    weatherDiv.innerHTML = "";
 });



function getFormData() {


}

function addLocationName(name) {
    const locationName = document.createElement("H1");
    const lineInBetween = document.createElement("hr");
    lineInBetween.style.width = "100%";
    lineInBetween.style.background= "#3273dc4a";
    locationName.innerHTML = `Location: ${name}`;
    weatherDiv.append(lineInBetween);
    weatherDiv.append(locationName);
    
}

function addConditions(conditions) {
    const iconCode = conditions;
    const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
    const climate_img = document.createElement("IMG");
    climate_img.setAttribute("src", iconUrl);
    climate_img.setAttribute("width", "35px");
    climate_img.setAttribute("height", "35px");
    weatherDiv.append(climate_img);


}

function addTemp(temp) {
    const theTemp = document.createElement("p");
    theTemp.innerHTML = `Temp: ${temp}`;
    weatherDiv.append(theTemp);

}



function addWind(windSpeed) {
    const windElement = document.createElement("p");
    windElement.innerHTML = `Wind Speed: ${windSpeed}`;
    weatherDiv.append(windElement);
}

function addMap(lat, lon) {
    const mapUrl = `http://maps.google.com/maps?q=${lat},${lon}&output=embed`;
    const iFrameElement = document.createElement("iframe");
    iFrameElement.setAttribute("src", mapUrl);
    weatherDiv.append(iFrameElement);
    // add an <iframe> element with the src = mapURL
}

function addSunInfo(sunrise, sunset) {
    const unixSunriseConvert = moment.unix(sunrise).format('YYYY MM DD');
    const unixSunetConvert = moment.unix(sunset).format('YYYY MM DD');
    const sunDateHolder = document.createElement("p");
    sunDateHolder.innerHTML = `Sunrise: ${unixSunriseConvert}  Sunset: ${unixSunetConvert}`;
    weatherDiv.append(sunDateHolder);

}

/* Not in use
function readableDate(unixDate) {
    // Use moment.js to convert Unix Date to readable Date
}*/

function getWeather(location) {
    const URL = get(`https://api.openweathermap.org/data/2.5/weather?q=${location},US&appid=2f4580c1da2a1471787ee4c356181fd1&units=imperial`);
    URL.then(function(climate){
        console.log(climate);
        addLocationName(climate.name);
        addTemp(climate.main.temp);
        addConditions(climate.weather[0].icon);
        addWind(climate.wind.speed);
        addSunInfo(climate.sys.sunrise, climate.sys.sunset);
        addMap(climate.coord.lat, climate.coord.lon);
    })
}


getWeather("Atlanta");
