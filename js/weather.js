const API_KEY = 'f960aeeae5aa326393e8068d58eba4ba';

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.latitude;

  console.log('사는곳 :', lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}8&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector('#weather span:first-child');
      const city = document.querySelector('#weather span:last-child');

      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
    });
}

function onGeoError() {
  console.log('날씨 찾을수 없음');
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
