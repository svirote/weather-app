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

  let cityOffset = response.data.timezone / 3600; //Time zone city to UTC in hours
  let userOffset = now.getTimezoneOffset() / 60; // Time zone user to UTC in hours

  let diffHours = cityOffset + userOffset;

  cityDate.setTime(now.getTime() + diffHours * 60 * 60 * 1000);

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

  favoriteList.forEach(function (favoriteCity) {
    if (favoriteCity === cityName) {
      blockFavoriteButton("exists");
    } else {
      showFavoriteButton();
    }
  });

  retrieveForecast(lat, lon);
  pageUpdate();
}

function favoriteWeatherData(response) {
  let cityDescription = `${response.data.name}, ${response.data.sys.country}`;
  let weatherDescription = response.data.weather[0].description;
  let temp = Math.round(response.data.main.temp);
  let tempMax = Math.round(response.data.main.temp_max);
  let tempMin = Math.round(response.data.main.temp_min);
  let iconWeather = iconChoice(response.data.weather[0].icon);

  let cityOffset = response.data.timezone / 3600; //Time zone city to UTC in hours
  let userOffset = now.getTimezoneOffset() / 60; // Time zone user to UTC in hours
  let diffHours = cityOffset + userOffset;

  let favoriteCityDate = new Date();
  favoriteCityDate.setTime(
    favoriteCityDate.getTime() + diffHours * 60 * 60 * 1000
  );

  document.querySelector("#start-page").style.display = "none";
  document.querySelector("#favorite-page").style.display = "block";

  let favoriteDate = "";

  if (language === "en") {
    favoriteDate = formatedDateEN(favoriteCityDate, "partial");
  }
  if (language === "fr") {
    favoriteDate = formatedDateFR(favoriteCityDate, "partial");
  }
  if (language === "pt_br") {
    favoriteDate = formatedDatePTBR(favoriteCityDate, "partial");
  }

  let pageFavorites = document.querySelector("#fvorite-cities");

  pageFavorites.innerHTML =
    pageFavorites.innerHTML +
    `  
   <div class="col">
      <div class="card mb-3 favorite" style="max-width: 220px">
        <div class="card-body">
          <h6>${cityDescription}</h6>
          <div class="row f-1">
            <div class="col-9 current-temp-favorites">
              <span class="forecast-symbol">
                ${iconWeather}
              </span>
              <span class="temperature">${temp}</span>
              <span class="unit">°C</span> |
            </div>
            <div class="col-3 max-min-temp-favorites">
              <span class="temperature">${tempMax}</span>
              <span class="unit">°C</span>
              <div class="minimal-temp">
                <span class="temperature">${tempMin}</span>
                <span class="unit">°C</span>
              </div>
            </div>
          </div>
          <div class="fav-description">${weatherDescription}</div>
        </div>
        <div class="header"> ${favoriteDate} <br />
          ${timeFormatMilitary(favoriteCityDate)} &ensp;
          <i class="fa-solid fa-arrows-left-right"></i> &ensp; 
          ${timeFormatTwelve(favoriteCityDate)}
         
        </div>
      </div>
    </div>`;
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

function currentInfoFavorites() {
  favoriteList.forEach(function (favoriteCity) {
    let apiWeatherKey = "951b5746581fed4443760487ebb7e1e0";
    let apiUrlStart = "https://api.openweathermap.org/data/2.5/weather?q=";
    let units = "metric";
    let completeUrl = `${apiUrlStart} ${favoriteCity}&lang=${language}&appid=${apiWeatherKey}&units=${units}`;

    axios.get(completeUrl).then(favoriteWeatherData);
  });
}

function timeFormatTwelve(date) {
  hourTwelveFormat = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return hourTwelveFormat;
}

function timeFormatMilitary(date) {
  let hours = twoDigitsNumber(date.getHours());
  let minutes = twoDigitsNumber(date.getMinutes());

  return `${hours}h${minutes}`;
}

function formatedDateSelection() {
  if (language === "en") {
    return formatedDateEN(cityDate, "full");
  }
  if (language === "fr") {
    return formatedDateFR(cityDate, "full");
  }
  if (language === "pt_br") {
    return formatedDatePTBR(cityDate, "full");
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
  let year = cityDate.getFullYear();

  let greetings = document.querySelectorAll(".greetings");
  greetings.forEach(function (greeting) {
    greeting.innerHTML = selectGreeting(now.getHours());
  });

  let dayId = document.querySelector("#day-id");
  dayId.innerHTML = `${formatedDateSelection()} ${year}`;

  let timeMilitary = document.querySelector("#time-military");
  timeMilitary.innerHTML = timeFormatMilitary(cityDate);

  let timeTwelve = document.querySelector("#time-twelve");
  timeTwelve.innerHTML = timeFormatTwelve(cityDate);

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

    if (language === "en") {
      message = `<h1> ${iconWeater} Oh no! <br/> You didn't select a city. <br/> Please reload the page.</h1>`;
    }
    if (language === "fr") {
      message = `<h1>${iconWeater} Oh no! <br/> Vous n'avez pas selectionné(e) une ville. <br/> Merci de actualiser la page.</h1>`;
    }
    if (language === "pt_br") {
      message = `<h1>${iconWeater} Oh no! <br/> Você não selecionou uma cidade. <br/> Por favor, recarregue a pagina.</h1>`;
    }

    page.innerHTML =
      message +
      `<footer>
          <a
            href="https://github.com/svirote/weather-app"
            target="_blank"
            title="GitHub Suelen Virote"
          >
            Open-source code</a
          >
          by Suelen Virote
        </footer>`;
  }
}

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
  document.querySelector("#favorite-title").innerHTML =
    "Your list of favorites:";
}

function languageFR() {
  language = "fr";
  currentInfoByCity(cityName);
  document.querySelector(".language-1").style.display = "block";
  document.querySelector(".language-2").style.display = "none";
  document.querySelector(".language-3").style.display = "block";
  document.querySelector("#city-name").placeholder = "Recherche par ville...";
  document.querySelector("#favorite-title").innerHTML =
    "Votre liste de favorits:";
}

function languagePTBR() {
  language = "pt_br";
  currentInfoByCity(cityName);
  document.querySelector(".language-1").style.display = "block";
  document.querySelector(".language-2").style.display = "block";
  document.querySelector(".language-3").style.display = "none";
  document.querySelector("#city-name").placeholder = "Procurar por cidade...";
  document.querySelector("#favorite-title").innerHTML =
    "Sua lista de favoritos: ";
}

function loadPage() {
  currentInfoByCity(cityName);
}

function blockFavoriteButton(string) {
  let favoriteCity = document.querySelector("#add-favorite");

  favoriteCity.removeEventListener("click", addfavoriteCity);
  favoriteCity.classList.remove("favorite-symbol");
  favoriteCity.style.color = "#393E46";

  if (string === "full") {
    if (language === "en") {
      document.querySelector("#add-favorite").title =
        "You already have 3 favorite cities !";
    }
    if (language === "fr") {
      document.querySelector("#add-favorite").title =
        "Vous avez déjà 3 villes favorites !";
    }
    if (language === "pt_br") {
      document.querySelector("#add-favorite").title =
        "Você já favoritou 3 cidades !";
    }
  }

  if (string === "exists") {
    if (language === "en") {
      document.querySelector("#add-favorite").title =
        "This city is already a favorite !";
    }
    if (language === "fr") {
      document.querySelector("#add-favorite").title =
        "Cette ville est déjà une favorit !";
    }
    if (language === "pt_br") {
      document.querySelector("#add-favorite").title =
        "Esta cidade já é favorita!";
    }
  }
}

function showFavoriteButton() {
  let favoriteCity = document.querySelector("#add-favorite");

  favoriteCity.addEventListener("click", addfavoriteCity);
  favoriteCity.classList.add("favorite-symbol");
  favoriteCity.title = "Add to favorite list";
  favoriteCity.style.color = "#eeeeee";

  if (language === "en") {
    document.querySelector("#add-favorite").title = "Add to favorites";
  }

  if (language === "fr") {
    document.querySelector("#add-favorite").title = "Rajouter aux favorits";
  }

  if (language === "pt_br") {
    document.querySelector("#add-favorite").title = "Adicionar aos favoritos";
  }
}

function addfavoriteCity() {
  document.querySelector("#show-fav").style.display = "block";

  blockFavoriteButton("exists");
  favoriteList.push(cityName);
  manageFavoriteList();

  let seeFavoriteList = document.querySelector("#favorite");
  seeFavoriteList.style.color = "#eeeeee";

  if (favoriteList.length === 3) {
    blockFavoriteButton("full");
  }
}

function noFavoritesLeft() {
  document.querySelector("#favorite").style.color = "#393E46";
  document.querySelector("#show-fav").style.display = "none";
  document.querySelector("#favorite-page").style.display = "none";
}

function deleteCity(stringToDelete, cityToDelete) {
  stringToDelete.remove();
  let tempFavoriteList = [];

  favoriteList.forEach(function (favoriteCity) {
    if (favoriteCity === cityToDelete) {
    } else {
      tempFavoriteList.push(favoriteCity);
    }
  });

  favoriteList = tempFavoriteList;

  favoriteList.forEach(function (favoriteCity) {
    if (favoriteCity === cityName) {
      blockFavoriteButton("exists");
    } else {
      if (favoriteList.length === 0) {
        noFavoritesLeft();
      } else {
        showFavoriteButton();
      }
    }
  });
}

function preparationDeleteCity1() {
  let stringToDelete = document.querySelector("#fav-0");
  let cityToDelete = document.querySelector("#fav-city-0").innerHTML;
  deleteCity(stringToDelete, cityToDelete);
}

function preparationDeleteCity2() {
  let stringToDelete = document.querySelector("#fav-1");
  let cityToDelete = document.querySelector("#fav-city-1").innerHTML;
  deleteCity(stringToDelete, cityToDelete);
}

function preparationDeleteCity3() {
  let stringToDelete = document.querySelector("#fav-2");
  let cityToDelete = document.querySelector("#fav-city-2").innerHTML;
  deleteCity(stringToDelete, cityToDelete);
}

function manageFavoriteList() {
  let listOfFavorites = document.querySelector("#list-of-favorites");
  listOfFavorites.innerHTML = "";
  favoriteList.forEach(function (favoriteCity, index) {
    listOfFavorites.innerHTML =
      listOfFavorites.innerHTML +
      `
      <div id="fav-${index}" class="favorite-city">
        <span id="fav-city-${index}">${favoriteCity}</span>
        <span id="remove-${index}" class="delete-${index}">
          <i class="fa-solid fa-circle-xmark"></i>
        </span>
      </div>
      `;
  });

  if (favoriteList.length >= 1) {
    let removeCity1 = document.querySelector("#remove-0");
    removeCity1.addEventListener("click", preparationDeleteCity1);
  }

  if (favoriteList.length >= 2) {
    let removeCity2 = document.querySelector("#remove-1");
    removeCity2.addEventListener("click", preparationDeleteCity2);
  }

  if (favoriteList.length >= 3) {
    let removeCity3 = document.querySelector("#remove-2");
    removeCity3.addEventListener("click", preparationDeleteCity3);
  }
}

function showFirstPage() {
  document.querySelector("#favorite-page").style.display = "none";
  let pageFavorites = document.querySelector("#fvorite-cities");
  pageFavorites.innerHTML = ``;
  document.querySelector("#start-page").style.display = "block";
}

var now = new Date(); //current date global variable
var cityDate = new Date(); //caity date global variable
var language = "en"; //english by default
var cityName = "Rio de Janeiro"; //Rio de Janeiro by default
var favoriteList = [];

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

let favoriteCity = document.querySelector("#add-favorite");
favoriteCity.addEventListener("click", addfavoriteCity);

let showfavoriteCity = document.querySelector("#show-fav");
showfavoriteCity.addEventListener("click", currentInfoFavorites);

let backFisrtPage = document.querySelector("#show-start");
backFisrtPage.addEventListener("click", showFirstPage);

noFavoritesLeft();

// Local function to count the last update invoked right away
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
})();

// `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+ ${citySearch}`
