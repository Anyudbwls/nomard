const loginInput = document.querySelector('#login-form input');
const loginForm = document.querySelector('#login-form');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAMES = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(e) {
  e.preventDefault();
  const userName = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAMES);

  localStorage.setItem(USERNAME_KEY, userName);
  paintGreetings(userName);
  console.log(userName);
}

function paintGreetings(userName) {
  greeting.innerText = `hello ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAMES);
}

const saveUserName = localStorage.getItem(USERNAME_KEY);

if (saveUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAMES);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreetings(saveUserName);
}
