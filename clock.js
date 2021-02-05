const clockContainer = document.querySelector(".js-clock"),
     clockTitle = clockContainer.querySelector("h1");


function timer() {
   const timeNow = new Date();
   let hourNow = timeNow.getHours()-12;
   const minuteNow = timeNow.getMinutes();
   if (hourNow < 0) {
       hourNow = timeNow.getHours();
       clockTitle.innerText = `${hourNow < 10 ? `0${hourNow}` : hourNow}:${minuteNow < 10 ? `0${minuteNow}` : minuteNow}AM`
   } else if (hourNow >= 0) {
       hourNow = Math.ceil(hourNow)
       clockTitle.innerText = `${hourNow < 10 ? `0${hourNow}` : hourNow}:${minuteNow < 10 ? `0${minuteNow}` : minuteNow}PM`
   }
//    clockTitle.innerText = `${hourNow < 10 ? `0${hourNow}` : hourNow}:${minuteNow < 10 ? `0${minuteNow}` : minuteNow}:${secondNow < 10 ? `0${secondNow}` : secondNow}`;
}


function init() {
    timer()
    setInterval(timer, 1000)
}

init()