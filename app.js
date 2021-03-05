import weatherData from "./weatherData.js";
import {
  iconClassConverter,
  capitalizeFirstLetter,
  windIconDirection,
} from "./helper.js";
const days = weatherData.days;
console.log(weatherData);

// dom selectors
const daysWrap = document.querySelector(".days-wrap");
const widgetIcon = document.querySelector("#widget-icon");
const widgetIconName = document.querySelector(".widget-icon-name");
const widgetDirectionIcon = document.querySelector("#widget-direction-icon");
const widgetWindDirection = document.querySelector(".wind-direction");
const windSpeed = document.querySelector(".wind-speed");
const widgetDay = document.querySelector(".widget-day");
const widgetTemp = document.querySelector(".widget-temp");

// create element
const daysList = document.createElement("ul");

//render days
days.forEach((day, index) => {
  // create elements
  const dayCard = document.createElement("li");
  const weatherIcon = document.createElement("i");
  const dayWeatherInfo = document.createElement("div");
  const dayName = document.createElement("p");
  const dayTemperature = document.createElement("p");

  //add attributes
  dayCard.setAttribute("class", "day-card");
  dayCard.setAttribute("id", index);
  weatherIcon.setAttribute("class", `fas fa-${iconClassConverter(day.type)}`);
  dayWeatherInfo.setAttribute("class", "day-weather-info");

  //add content
  dayName.textContent = day.day;
  dayTemperature.innerHTML = day.temp + "&#176";

  //append elements
  daysWrap.appendChild(daysList);
  daysList.appendChild(dayCard);
  dayCard.appendChild(weatherIcon);
  dayCard.appendChild(dayWeatherInfo);
  dayWeatherInfo.appendChild(dayName);
  dayWeatherInfo.appendChild(dayTemperature);
});

//render widget

//add attributes
widgetIcon.setAttribute("class", `fas fa-${iconClassConverter(days[0].type)}`);
widgetDirectionIcon.setAttribute("class", `fas fa-arrow-up`);
widgetDirectionIcon.style.webkitTransform = `rotate(${windIconDirection(
  days[0].windDirection
)})`;

//add content
widgetIconName.textContent = capitalizeFirstLetter(days[0].type);
widgetWindDirection.innerHTML = capitalizeFirstLetter(
  days[0].windDirection.split("-")[0] +
    " " +
    capitalizeFirstLetter(days[0].windDirection.split("-")[1])
);
windSpeed.textContent = `${days[0].windSpeed} ${weatherData.windSpeedUnit}`;
widgetDay.textContent = days[0].day;
widgetTemp.innerHTML = days[0].temp + "&#176";

//add days event listener

const dayrCards = document.querySelectorAll(".day-card");
dayrCards.forEach((card) => {
  card.addEventListener("click", () => {
    widgetIcon.setAttribute(
      "class",
      `fas fa-${iconClassConverter(days[card.id].type)}`
    );
    widgetIconName.textContent = capitalizeFirstLetter(days[card.id].type);
    widgetWindDirection.innerHTML = capitalizeFirstLetter(
      days[card.id].windDirection.split("-")[0] +
        " " +
        capitalizeFirstLetter(days[card.id].windDirection.split("-")[1])
    );
    windSpeed.textContent = `${days[card.id].windSpeed} ${
      weatherData.windSpeedUnit
    }`;
    widgetDay.textContent = days[card.id].day;
    widgetTemp.innerHTML = days[card.id].temp + "&#176";
    widgetDirectionIcon.style.webkitTransform = `rotate(${windIconDirection(
      days[card.id].windDirection
    )})`;
  });
});
