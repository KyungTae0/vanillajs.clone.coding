const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'userName';

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(123);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);

    painGreetings(userName);
}

function painGreetings(userName) {
    greeting.innerText = `hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
    
} else {
    painGreetings(savedUserName);
}