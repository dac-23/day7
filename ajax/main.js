async function getCurrentWeather() {
  let appid = "7023923dd26a725da995c75b65864de5";
  let city = "mumbai";
  let url = `https://api.openweathermap.org/data/2.5/weather?appid=${appid}&units=metric&q=${city}`;

  // Request :: Response
  let res = await fetch(url);
  let data = await res.json();

  console.log(data);

  // DOM OPERATION :: DISPLAY THE DATA TO THE END USER
  let lon = data.coord.lon;
  let lat = data.coord.lat;
  let currentTemp = data.main.temp;
  let maxTemp = data.main.temp_max;
  let minTemp = data.main.temp_min;

  let parentTag = document.querySelector("#parent");
  let newValue = `
                    <div class="fs-1">CITY : ${city}</div>
                    <div class="fs-3">
                        Current Temp : <span class="badge bg-primary">${currentTemp}</span>
                    </div>
                    <div class="fs-4">Lon : ${lon} And Lat: ${lat}</div>
                    <div class="fs-4">Max : ${maxTemp} And Min: ${minTemp}</div>
                `;
  parentTag.innerHTML = newValue;
}
