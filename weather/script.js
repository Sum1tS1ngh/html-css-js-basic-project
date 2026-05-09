const cityInput = document.querySelector(".enterCity");
const inputform = document.querySelector(".inputform");
const card = document.querySelector(".card");
const APIKEY = "ae08ffe455dc787ac20e38a85fdf7db9"; // fell free to use your own API key from openweathermap.org
let city;

inputform.addEventListener("submit", async (event) => {
  event.preventDefault();
  city = cityInput.value.trim();
  if (city) {
    try {
      const weatherdata = await getweather(city);
      infoDisplay(weatherdata);
    } catch (error) {
      errorDisplayFn(error);
    }
  } else {
    errorDisplayFn("please enter a city");
  }
});

async function getweather(city) {
  const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`;
  const response = await fetch(apiurl);
  if (!response.ok) {
    throw new Error("weather could not fetch");
  }
  return await response.json();
}

function infoDisplay(weatherdata) {
  const {
    main: { temp, humidity },
    name: city,
    weather: [{ description, id }],
  } = weatherdata;

  card.style.display = "flex";
  card.textContent = "";
  card.classList.add("card");
  const tempeture = document.createElement("h1");
  const Humidity = document.createElement("p");
  const City = document.createElement("p");
  const Description = document.createElement("p");
  const weatherEmoji = document.createElement("p");
  const emoji = getEmoji(id);

  tempeture.textContent = `${temp}°C`;
  Humidity.textContent = `Humidity:${humidity}%`;
  City.textContent = city;
  Description.textContent = description;
  weatherEmoji.textContent = emoji;

  tempeture.classList.add("header");
  Humidity.classList.add("humidity");
  City.classList.add("header");
  Description.classList.add("skystatus");
  weatherEmoji.classList.add("weatherEmoji");

  card.appendChild(City);
  card.appendChild(tempeture);
  card.appendChild(Humidity);
  card.appendChild(Description);
  card.appendChild(weatherEmoji);
}

function getEmoji(id) {
  switch (true) {
    case 200 <= id && id < 300:
      return "⛈️";

    case 300 <= id && id < 400:
      return "💦";

    case 400 <= id && id < 500:
      return "🌧️";

    case 500 <= id && id < 600:
      return "🌦️";

    case 600 <= id && id < 700:
      return "❄️";

    case 700 <= id && id < 800:
      return "🌫️";

    case id === 800:
      return "☀️";

    case 801 <= id && id < 900:
      return "☁️";

    default:
      return "❓";
  }
}

function errorDisplayFn(message) {
  console.log(message);
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("error-display");
  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}
async function funDefault() {
  const value = await getweather("patna");
  infoDisplay(value);
}
funDefault();
