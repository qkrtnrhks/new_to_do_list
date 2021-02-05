const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      greeting = document.querySelector(".js-greeting"),
      nameBtn = document.querySelector(".delete_name");
    
const USER_LS = "currentUser",
      SHOWING_CN = "showing";

      
function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    const currentValue = input.value;
    event.preventDefault();
    paintName(currentValue);
    saveName(currentValue);
    input.value = "";
}

function askForName(text) {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function deleteBtn() {
    localStorage.removeItem(USER_LS);
    greeting.classList.remove(SHOWING_CN);
    nameBtn.classList.remove(SHOWING_CN);
    askForName();
}

function paintName(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    nameBtn.classList.add(SHOWING_CN);
    greeting.innerText = `Good Day ${text}`;
    nameBtn.addEventListener("click", deleteBtn);
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintName(currentUser);
    }
}

function init() {
    loadName();
}

init()