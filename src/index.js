function twoDigitsNumber(twoDigits) {
  if (twoDigits <= 9) {
    twoDigits = "0" + twoDigits;
  } else {
    twoDigits = twoDigits;
  }
  return twoDigits;
}

function selectGreeting(hours) {
  var greetings = [];

  if (language === "en") {
    greetings = ["Good Morning", "Good Afternoom", "Good Evening"];
  }
  if (language === "fr") {
    greetings = ["Bonjour", "Bonne après-midi", "Bonsoir"];
  }
  if (language === "pt_br") {
    greetings = ["Bom dia", "Boa tarde", "Boa noite"];
  }

  if (hours < 12) {
    return `<i class="fa-solid fa-mug-saucer"></i>  ${greetings[0]}`;
  }
  if (hours >= 12 && hours < 18) {
    return `<i class="fa-solid fa-glass-water"></i>  ${greetings[1]}`;
  }
  if (hours >= 18) {
    return `<i class="fa-solid fa-champagne-glasses"></i>  ${greetings[2]}`;
  }
}

function formatedDateEN(date, format) {
  //Weekday
  let weekDaysEN = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let monthsEN = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let weekDay = weekDaysEN[date.getDay()];
  let day = date.getDate();
  let month = monthsEN[date.getMonth()];

  if (format === "full") {
    return `${weekDay}, ${day} ${month}`;
  } else {
    return `${weekDay.substring(0, 3)}, ${day} ${month}`;
  }
}

function formatedDateFR(date, format) {
  //Weekday
  let weekDaysFR = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];

  let monthsFR = [
    "Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre",
  ];

  let weekDay = weekDaysFR[date.getDay()];
  let day = date.getDate();
  let month = monthsFR[date.getMonth()];

  if (format === "full") {
    return `${weekDay}, ${day} ${month}`;
  } else {
    return `${weekDay.substring(0, 3)}, ${day} ${month}`;
  }
}

function formatedDatePTBR(date, format) {
  //Weekday
  let weekDaysPTBR = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sabado",
  ];

  let monthsPTBR = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Stembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  let weekDay = weekDaysPTBR[date.getDay()];
  let day = date.getDate();
  let month = monthsPTBR[date.getMonth()];

  if (format === "full") {
    return `${weekDay}, ${day} ${month}`;
  } else {
    return `${weekDay.substring(0, 3)}, ${day} ${month}`;
  }
}

function forecastDays(dayDtFormat) {
  let dayN = new Date(dayDtFormat * 1000);

  if (language === "en") {
    return formatedDateEN(dayN, "partial");
  }
  if (language === "fr") {
    return formatedDateFR(dayN, "partial");
  }
  if (language === "pt_br") {
    return formatedDatePTBR(dayN, "partial");
  }
}

function fahrenheitTemp(temp) {
  return Math.round(temp * 1.8 + 32);
}

function celsiusTemp(temp) {
  return Math.round((temp - 32) * (5 / 9));
}

function kmhmph(speed) {
  return Math.round(speed / 1.609);
}

function mphkmh(speed) {
  return Math.round(speed * 1.609);
}

function changeUnit(event) {
  let newUnit = event.target.innerHTML;

  let temperatureUnity = document.querySelectorAll(".unit");
  temperatureUnity.forEach(
    (temperatureUnity) => (temperatureUnity.innerText = newUnit)
  );

  let windUnity = document.querySelectorAll(".unit-wind");
  let tempValue = document.querySelectorAll(".temperature");
  let windValue = document.querySelectorAll(".value-wind");

  let celsiusLink = document.querySelector("#celsius-link");
  let fahrenheitLink = document.querySelector("#fahrenheit-link");

  if (newUnit === "°F") {
    tempValue.forEach(
      (tempValue) => (tempValue.innerText = fahrenheitTemp(tempValue.innerText))
    );
    windValue.forEach(
      (windValue) => (windValue.innerText = kmhmph(windValue.innerText))
    );
    windUnity.forEach((windUnity) => (windUnity.innerText = "mph"));

    //allows convertion to fahrenheit
    celsiusLink.classList.add("celsius");
    celsiusLink.addEventListener("click", changeUnit);

    //blocks convertion to fahrenheit
    fahrenheitLink.classList.remove("fahrenheit");
    fahrenheitLink.removeEventListener("click", changeUnit);
  } else {
    tempValue.forEach(
      (tempValue) => (tempValue.innerText = celsiusTemp(tempValue.innerText))
    );
    windValue.forEach(
      (windValue) => (windValue.innerText = mphkmh(windValue.innerText))
    );
    windUnity.forEach((windUnity) => (windUnity.innerText = "km/h"));

    //allows convertion to fahrenheit
    fahrenheitLink.classList.add("fahrenheit");
    fahrenheitLink.addEventListener("click", changeUnit);
    //blocks convertion to celsius
    celsiusLink.classList.remove("celsius");
    celsiusLink.removeEventListener("click", changeUnit);
  }
}

function iconChoice(codeIcon) {
  if (codeIcon === "01d") {
    return `<i class="wi wi-day-sunny"></i>`; //Clear Sky day
  }
  if (codeIcon === "01n") {
    return `<i class="wi wi-night-clear"></i>`; //Clear Sky night
  }

  if (codeIcon === "02d") {
    return `<i class="wi wi-day-cloudy"></i>`; //few clouds day
  }
  if (codeIcon === "02n") {
    return `<i class="wi wi-night-alt-cloudy"></i>`; //few clouds night
  }

  if (codeIcon === "03d" || codeIcon === "03n") {
    return `<i class="wi wi-cloud"></i>`; //Scattered clouds: 25-50%
  }

  if (codeIcon === "04d" || codeIcon === "04n") {
    return `<i class="wi wi-cloudy"></i>`; //Broken clouds: 51-84%  and Overcast clouds: 85-100%
  }

  if (codeIcon === "09d" || codeIcon === "09n") {
    return `<i class="wi wi-rain"></i>`; //shower rain
  }

  if (codeIcon === "10d") {
    return `<i class="wi wi-day-rain"></i>`; // rain day
  }

  if (codeIcon === "10n") {
    return `<i class="wi wi-night-alt-rain"></i>`; // rain night
  }

  if (codeIcon === "11d") {
    return `<i class="wi wi-day-lightning"></i>`; //thunderstorm day
  }

  if (codeIcon === "11n") {
    return `<i class="wi wi-night-alt-lightning"></i>`; //thunderstorm night
  }

  if (codeIcon === "13d" || codeIcon === "13n") {
    return `<i class="wi wi-snowflake-cold"></i>`; //snow
  }

  if (codeIcon === "50d" || codeIcon === "50n") {
    return `<i class="wi wi-dust"></i>`; //mist
  }
}

function cityWeatherData(response) {
  let lat = response.data.coord.lat;
  let lon = response.data.coord.lon;

  let temp = document.querySelector("#current-main-temperature");
  temp.innerHTML = Math.round(response.data.main.temp);

  let tempMax = document.querySelector("#current-max-temperature");
  tempMax.innerHTML = Math.round(response.data.main.temp_max);

  let tempMin = document.querySelector("#current-min-temperature");
  tempMin.innerHTML = Math.round(response.data.main.temp_min);

  let windSpeed = document.querySelector("#current-wind");
  windSpeed.innerHTML = Math.round(response.data.wind.speed);

  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = Math.round(response.data.main.humidity);

  let iconWeater = document.querySelector("#icon-prevision");
  iconWeater.innerHTML = iconChoice(response.data.weather[0].icon);

  let description = document.querySelector("#weather-description");
  description.innerHTML = response.data.weather[0].description;

  let city = document.querySelector("#city-forecast");
  city.innerHTML = `${response.data.name}, ${response.data.sys.country}`;

  cityName = response.data.name;

  retrieveForecast(lat, lon);
  pageUpdate();
  //let time = new Date();
  //let now = time.getTime();

  //alert(response.data.timezone);
}

function currentInfoByCoords(location) {
  let lat = location.coords.latitude;
  let lon = location.coords.longitude;

  let apiWeatherKey = "951b5746581fed4443760487ebb7e1e0";
  let apiUrlStart = "https://api.openweathermap.org/data/2.5/weather?";
  let units = "metric";

  let completeUrl = `${apiUrlStart}lat=${lat}&lon=${lon}&lang=${language}&appid=${apiWeatherKey}&units=${units}`;

  axios.get(completeUrl).then(cityWeatherData);
}

function currentInfoByCity(cityName) {
  let apiWeatherKey = "951b5746581fed4443760487ebb7e1e0";
  let apiUrlStart = "https://api.openweathermap.org/data/2.5/weather?q=";
  let units = "metric";
  let completeUrl = `${apiUrlStart} ${cityName}&lang=${language}&appid=${apiWeatherKey}&units=${units}`;

  axios.get(completeUrl).then(cityWeatherData);
}

function timeFormatTwelve(date) {
  hourTwelveFormat = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return hourTwelveFormat;
}

function formatedDateSelection() {
  if (language === "en") {
    return formatedDateEN(now, "full");
  }
  if (language === "fr") {
    return formatedDateFR(now, "full");
  }
  if (language === "pt_br") {
    return formatedDatePTBR(now, "full");
  }
}

function showForecast(response) {
  let forecast = response.data.daily; //returns a array

  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = "";

  forecast.forEach(function (dayInfo, index) {
    if (index > 0 && index < 6) {
      forecastHTML =
        forecastHTML +
        `
      <div class="col">
            <div class="card mb-3 prevision" style="max-width: 150px">
              <div class="card-body">
                <p>
                  <span class="temperature"> 
                  ${Math.round(dayInfo.temp.max)} </span>
                  <span class="unit">°C</span> &ensp;
                  <span class="minimal-temp">
                    <span class="temperature">
                    ${Math.round(dayInfo.temp.min)}</span>
                    <span class="unit">°C</span>
                  </span>
                </p>
                <div class="forecast-symbol">
                  ${iconChoice(dayInfo.weather[0].icon)}
                </div>
                <div class="header"> ${forecastDays(dayInfo.dt)} </div>
              </div>
            </div>
          </div>
          `;
    }
  });

  forecastElement.innerHTML = forecastHTML;
  //console.log(forecastHTML);
}

function retrieveForecast(lat, lon) {
  let apiWeatherKey = "2b6fdad0cbd018949c50c70f72250726";
  let apiUrlStart = "https://api.openweathermap.org/data/2.5/onecall?";
  let units = "metric";

  let completeUrl = `${apiUrlStart}lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${apiWeatherKey}&units=${units}&lang=${language}`;

  axios.get(completeUrl).then(showForecast);
}

function pageUpdate() {
  now = new Date(); //current date

  let year = now.getFullYear();
  let hours = twoDigitsNumber(now.getHours());

  let greetings = document.querySelector(".greetings");
  greetings.innerHTML = selectGreeting(now.getHours());

  let minutes = twoDigitsNumber(now.getMinutes());

  let dayId = document.querySelector("#day-id");
  dayId.innerHTML = `${formatedDateSelection()} ${year}`;

  let timeMilitary = document.querySelector("#time-military");
  timeMilitary.innerHTML = `${hours}h${minutes}`;

  let timeTwelve = document.querySelector("#time-twelve");
  timeTwelve.innerHTML = timeFormatTwelve(now);

  let fahrenheitLink = document.querySelector("#fahrenheit-link");
  fahrenheitLink.addEventListener("click", changeUnit);

  let celsiusLink = document.querySelector("#celsius-link");
  celsiusLink.classList.remove("celsius"); // When Loaded is not possible to convert to celsius
  celsiusLink.removeEventListener("click", changeUnit);
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-name");
  let city = document.querySelector("#city-forecast");

  if (searchInput.value) {
    let city = searchInput.value;
    searchInput.value = null;
    currentInfoByCity(city);
  } else {
    let page = document.querySelector(".window-1");
    let iconWeater = `<i class="fa-solid fa-circle-question"></i>`;
    page.innerHTML = `${iconWeater} Oh no! <br/> You didn't select a city. <br/>  Please reload the page.`;
  }
}

//when clicking in the geolocation
function pointMyLocation() {
  navigator.geolocation.getCurrentPosition(currentInfoByCoords);
}

function updateLanguage(id) {
  if (id === 3) {
    alert("Bem vindo");
  }
}

function languageEN() {
  language = "en";
  currentInfoByCity(cityName);
  document.querySelector(".language-1").style.display = "none";
  document.querySelector(".language-2").style.display = "block";
  document.querySelector(".language-3").style.display = "block";
  document.querySelector("#city-name").placeholder = "Search for city...";
  //change last updated
}

function languageFR() {
  language = "fr";
  currentInfoByCity(cityName);
  document.querySelector(".language-1").style.display = "block";
  document.querySelector(".language-2").style.display = "none";
  document.querySelector(".language-3").style.display = "block";
  document.querySelector("#city-name").placeholder = "Recherche par ville...";
  //change last updated
}

function languagePTBR() {
  language = "pt_br";
  currentInfoByCity(cityName);
  document.querySelector(".language-1").style.display = "block";
  document.querySelector(".language-2").style.display = "block";
  document.querySelector(".language-3").style.display = "none";
  document.querySelector("#city-name").placeholder = "Procurar por cidade...";
  //change last updated
}

function loadPage() {
  currentInfoByCity(cityName);
}

function addFavouriteCity() {
  //${cityName} is now a favourite city, if you look for a new city the weather for ${cityName} will be avaliable using the arrow
}

var now = new Date(); //current date global variable
var language = "en"; //english by default
var cityName = "Rio de Janeiro"; //Rio de Janeiro by default

currentInfoByCity(cityName);

let form = document.querySelector("#search-city");
form.addEventListener("submit", search);

let currentLocation = document.querySelector("#geolocation");
currentLocation.addEventListener("click", pointMyLocation);

document.querySelector(".language-1").style.display = "none";

let updateEnglish = document.querySelector("#english");
updateEnglish.addEventListener("click", languageEN);

let updateFrench = document.querySelector("#french");
updateFrench.addEventListener("click", languageFR);

let updatePortuguese = document.querySelector("#pt-br");
updatePortuguese.addEventListener("click", languagePTBR);

let reloadPage = document.querySelector("#reload");
reloadPage.addEventListener("click", loadPage);

let favouriteCity = document.querySelector("#favourite");
favouriteCity.addEventListener("click", addFavouriteCity);

(function tick() {
  let timeUpdate = document.querySelector("#updated");
  let diff = Math.abs(new Date(now) - new Date()); // difference miliseconds between now and last refresh
  let passedMinutes = Math.floor(diff / 60000);

  if (language === "en") {
    timeUpdate.innerHTML = `Updated ${passedMinutes} min ago`;
  }
  if (language === "fr") {
    timeUpdate.innerHTML = `Mis à jour il y a ${passedMinutes} min`;
  }
  if (language === "pt_br") {
    timeUpdate.innerHTML = `Atualizado faz ${passedMinutes} min`;
  }
  window.setTimeout(tick, 1000);
})(); // Local function to count the last update invoked right away

// `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+ ${citySearch}`
