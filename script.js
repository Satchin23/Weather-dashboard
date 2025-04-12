async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "9984631d69279a3c6bdf76334461a448";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (response.status === 200) {
    document.getElementById("cityName").innerText = data.name;
    document.getElementById("description").innerText = data.weather[0].main;
    document.getElementById("temp").innerText = Math.round(data.main.temp) + " °C";
    document.getElementById("humidity").innerText = data.main.humidity + "%";
    document.getElementById("wind").innerText = data.wind.speed + " km/h";

    const condition = data.weather[0].main.toLowerCase();
    document.body.className = "";

    if (condition.includes("cloud")) {
      document.body.classList.add("clouds");
    } else if (condition.includes("rain")) {
      document.body.classList.add("rain");
    } else if (condition.includes("mist")) {
      document.body.classList.add("mist");
    } else if (condition.includes("clear")) {
      document.body.classList.add("clear");
    } else {
      document.body.classList.add("sunny");
    }
  } else {
    alert("City not found!");
  }
}
