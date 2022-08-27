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

function addDays(date, days) {
  let dayN = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + days
  );

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
    return `<i class="fa-solid fa-sun"></i>`; //Clear Sky day
  }
  if (codeIcon === "01n") {
    return `<i class="fa-solid fa-moon"></i>`; //Clear Sky night
  }

  if (codeIcon === "02d") {
    return `<i class="fa-solid fa-cloud-sun"></i>`; //few clouds day
  }
  if (codeIcon === "02n") {
    return `<i class="fa-solid fa-cloud-moon"></i>`; //few clouds night
  }

  if (
    codeIcon === "03d" ||
    codeIcon === "03n" ||
    codeIcon === "04d" ||
    codeIcon === "04n"
  ) {
    return `<i class="fa-solid fa-cloud"></i>`; //Clear Sky day
  }

  if (codeIcon === "09d" || codeIcon === "09n") {
    return `<i class="fa-solid fa-cloud-showers-heavy"></i>`; //shower rain
  }

  if (codeIcon === "10d") {
    return `<i class="fa-solid fa-cloud-sun-rain"></i>`; // rain day
  }

  if (codeIcon === "10n") {
    return `<i class="fa-solid fa-cloud-moon-rain"></i>`; // rain night
  }

  if (codeIcon === "11d" || codeIcon === "11n") {
    return `<i class="fa-solid fa-cloud-bolt"></i>`; //thunderstorm
  }

  if (codeIcon === "13d" || codeIcon === "13n") {
    return `<i class="fa-solid fa-snowflake"></i>`; //snow
  }

  if (codeIcon === "50d" || codeIcon === "50n") {
    return `<i class="fa-solid fa-circle-question"></i>`; //mist
  }
}

function cityWeatherData(response) {
  console.log(response);

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

  pageUpdate();
  //let time = new Date();
  //let now = time.getTime();

  //alert(response.data.timezone);
}

function forecastByCity(cityName) {
  let apiWeatherKey = "951b5746581fed4443760487ebb7e1e0";
  let apiUrlStart = "https://api.openweathermap.org/data/2.5/weather?q=";
  let units = "metric";
  let completeUrl = `${apiUrlStart} ${cityName}&lang=${language}&appid=${apiWeatherKey}&units=${units}`;

  axios.get(completeUrl).then(cityWeatherData);
}

function forecastByCoords(location) {
  let lat = location.coords.latitude;
  let lon = location.coords.longitude;

  let apiWeatherKey = "951b5746581fed4443760487ebb7e1e0";
  let apiUrlStart = "https://api.openweathermap.org/data/2.5/weather?";
  let units = "metric";

  let completeUrl = `${apiUrlStart}lat=${lat}&lon=${lon}&lang=${language}&appid=${apiWeatherKey}&units=${units}`;

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

  //function dailyForecast?
  let J1 = document.querySelector("#head-forecast-1"); //Jour n+1
  J1.innerHTML = addDays(now, 1);

  let J2 = document.querySelector("#head-forecast-2"); //Jour n+2
  J2.innerHTML = addDays(now, 2);

  let J3 = document.querySelector("#head-forecast-3"); //Jour n+3
  J3.innerHTML = addDays(now, 3);

  let J4 = document.querySelector("#head-forecast-4"); //Jour n+4
  J4.innerHTML = addDays(now, 4);

  let J5 = document.querySelector("#head-forecast-5"); //Jour n+5
  J5.innerHTML = addDays(now, 5);

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
    forecastByCity(city);
  } else {
    let page = document.querySelector(".window-1");
    let iconWeater = `<i class="fa-solid fa-circle-question"></i>`;
    page.innerHTML = `${iconWeater} Oh no! <br/> You didn't select a city. <br/>  Please reload the page.`;
  }
}

//when clicking in the geolocation
function pointMyLocation() {
  navigator.geolocation.getCurrentPosition(forecastByCoords);
}

function updateLanguage(id) {
  if (id === 3) {
    alert("Bem vindo");
  }
}

function languageEN() {
  language = "en";
  forecastByCity(cityName);
  document.querySelector(".language-1").style.display = "none";
  document.querySelector(".language-2").style.display = "block";
  document.querySelector(".language-3").style.display = "block";
  document.querySelector("#city-name").placeholder = "Search for city...";
  //change last updated
}

function languageFR() {
  language = "fr";
  forecastByCity(cityName);
  document.querySelector(".language-1").style.display = "block";
  document.querySelector(".language-2").style.display = "none";
  document.querySelector(".language-3").style.display = "block";
  document.querySelector("#city-name").placeholder = "Recherche par ville...";
  //change last updated
}

function languagePTBR() {
  language = "pt_br";
  forecastByCity(cityName);
  document.querySelector(".language-1").style.display = "block";
  document.querySelector(".language-2").style.display = "block";
  document.querySelector(".language-3").style.display = "none";
  document.querySelector("#city-name").placeholder = "Procurar por cidade...";
  //change last updated
}

var now = new Date(); //current date global variable
var language = "en"; //english by default
var cityName = "Paris"; //Paris by default
forecastByCity(cityName);

let form = document.querySelector("#search-city");
form.addEventListener("submit", search);

let currentLocation = document.querySelector("#geolocation");
currentLocation.addEventListener("click", pointMyLocation);

let updateEnglish = document.querySelector("#english");
updateEnglish.addEventListener("click", languageEN);

let updateFrench = document.querySelector("#french");
updateFrench.addEventListener("click", languageFR);

let updatePortuguese = document.querySelector("#pt-br");
updatePortuguese.addEventListener("click", languagePTBR);

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
