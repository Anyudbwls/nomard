const clock = document.querySelector('p#clock');

function getClock() {
  const date = new Date();
  const day = date.getDate();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  clock.innerText = `${day}일 ${hours}시 ${minutes}분`;
}
getClock();
setInterval(getClock, 1000);
