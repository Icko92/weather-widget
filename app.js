import weatherData from "./weatherData.js";
const days = weatherData.days;
console.log(weatherData);

// dom selectors
const daysWrap = document.querySelector(".days-wrap");

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
  weatherIcon.setAttribute("class", "fas fa-sun");
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
