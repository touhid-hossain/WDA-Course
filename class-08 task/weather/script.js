const apiKey = "5d46d21dc17270c0d4c11c2af23ecb8d";
const cityForm = document.getElementById("city-form");
const cityInput = document.getElementById("city-input");
const currentWeatherDiv = document.getElementById("current-weather");
const forecastDiv = document.getElementById("forecast");

// Event listener for form submission
cityForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = cityInput.value;
  getWeatherData(city);
  cityInput.value = "";
});

// Function to fetch weather data
async function getWeatherData(city) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await res.json();
    displayCurrentWeather(data);
    getForecastData(city);
    console.log(data);
  } catch (error) {
    console.error("Error fetching forecast data:", error);
  }
}

// Function to fetch forecast data
async function getForecastData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();
    displayForecast(data);
  } catch (error) {
    console.error("Error fetching forecast data:", error);
  }
}

// Function to display current weather
function displayCurrentWeather(data) {
  currentWeatherDiv.innerHTML = `
        <h2>Current Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
      `;
}

// Function to display forecast
function displayForecast(data) {
  forecastDiv.innerHTML = "<h2>Weather Forecast</h2>";
  data.list.forEach((forecast) => {
    const forecastItem = document.createElement("div");
    forecastItem.classList.add("forecast-item");
    forecastItem.innerHTML = `
          <p>Date: ${new Date(forecast.dt * 1000).toLocaleDateString()}</p>
          <p>Time: ${new Date(forecast.dt * 1000).toLocaleTimeString()}</p>
          <p>Temperature: ${forecast.main.temp}°C</p>
          <p>Weather: ${forecast.weather[0].description}</p>
        `;
    forecastDiv.appendChild(forecastItem);
  });
}
