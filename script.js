function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "9984631d69279a3c6bdf76334461a448"; 

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = `
        <p>📍 Location: ${data.name}</p>
        <p>🌡️ Temperature: ${data.main.temp} °C</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌬️ Wind: ${data.wind.speed} km/h</p>
        <p>⛅ Condition: ${data.weather[0].main}</p>
      `;
      document.getElementById("weatherResult").innerHTML = weatherInfo;
    })
    .catch(error => {
      document.getElementById("weatherResult").innerHTML = "❌ City not found!";
    });
}
