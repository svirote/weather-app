function twoDigitsNumber(twoDigits) {
  if (twoDigits <= 9) {
    twoDigits = "0" + twoDigits;
  } else {
    twoDigits = twoDigits;
  }
  return twoDigits;
}

function selectGreeting(hours) {
  if (hours < 12) {
    return `<i class="fa-solid fa-mug-saucer"></i>  Good Morning`;
  }
  if (hours >= 12 && hours < 18) {
    return `<i class="fa-solid fa-glass-water"></i>  Good Afternoom`;
  }
  if (hours >= 18) {
    return `<i class="fa-solid fa-champagne-glasses"></i>  Good Evening`;
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

function formatedDateFR(date) {
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
  return `${weekDay}, ${day} ${month}`;
}

function formatedDatePTBR(date) {
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

  let weekDay = weekDaysFR[date.getDay()];
  let day = date.getDate();
  let month = monthsFR[date.getMonth()];
  return `${weekDay}, ${day} ${month}`;
}

function addDays(date, days) {
  let dayN = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + days
  );
  return formatedDateEN(dayN, "partial");
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

  let city = document.querySelector("#city-forecast");
  city.innerHTML = `${response.data.name}, ${response.data.sys.country}`;

  pageUpdate();
  //let time = new Date();
  //let now = time.getTime();

  //alert(response.data.timezone);
}

function forecastByCity(cityName) {
  let apiWeatherKey = "951b5746581fed4443760487ebb7e1e0";
  let apiUrlStart = "https://api.openweathermap.org/data/2.5/weather?q=";
  let units = "metric";
  let completeUrl = `${apiUrlStart} ${cityName}&appid=${apiWeatherKey}&units=${units}`;

  axios.get(completeUrl).then(cityWeatherData);
}

function forecastByCoords(location) {
  let lat = location.coords.latitude;
  let lon = location.coords.longitude;

  let apiWeatherKey = "951b5746581fed4443760487ebb7e1e0";
  let apiUrlStart = "https://api.openweathermap.org/data/2.5/weather?";
  let units = "metric";

  let completeUrl = `${apiUrlStart}lat=${lat}&lon=${lon}&appid=${apiWeatherKey}&units=${units}`;

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

function pageUpdate() {
  let now = new Date(); //current date

  let year = now.getFullYear();
  let hours = twoDigitsNumber(now.getHours());

  let greetings = document.querySelector(".greetings");
  greetings.innerHTML = selectGreeting(now.getHours());

  let minutes = twoDigitsNumber(now.getMinutes());

  let dayId = document.querySelector("#day-id");
  dayId.innerHTML = `${formatedDateEN(now, "full")} ${year}`;

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

  (function tick() {
    let timeUpdate = document.querySelector("#updated");
    let diff = Math.abs(new Date(now) - new Date()); // difference miliseconds between now and last refresh
    timeUpdate.innerHTML = `${Math.floor(diff / 60000)} min ago`;
    window.setTimeout(tick, 10000);
  })(); // Local function to count the last update invoked right away
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
    city.innerHTML = `😝 Please select a city`;
    let iconWeater = document.querySelector("#icon-prevision");
    iconWeater.innerHTML = `<i class="fa-solid fa-circle-question"></i>`;
  }
}

//when clicking in the geolocation
function pointMyLocation() {
  navigator.geolocation.getCurrentPosition(forecastByCoords);
}

forecastByCity("Geneve");

let form = document.querySelector("#search-city");
form.addEventListener("submit", search);

let currentLocation = document.querySelector("#geolocation");
currentLocation.addEventListener("click", pointMyLocation);

//  alert(
//    `It is currently ${celsiusTemp}°C (${fahrenheitTemp}°F) in ${city} with a humidity of ${humidity}%`
//  );
//} else {
//alert(
//    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+ ${citySearch}`
//  );
// }
