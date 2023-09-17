const bgImg = ['1.jpeg', '2.jpeg', '3.jpeg'];

const change = document.querySelector('.change-bgimg');
const randomImg = bgImg[Math.floor(Math.random() * bgImg.length)];

const background = `url(img/${randomImg})`;
document.body.style.backgroundImage = background;
