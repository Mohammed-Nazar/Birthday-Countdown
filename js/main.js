const daysT = document.querySelector(".days")
const hoursT = document.querySelector(".hours");
const minutesT = document.querySelector(".minutes");
const secondsT = document.querySelector(".seconds");
const container = document.querySelector("#container");
const containerEn = document.querySelector(".container-en");

const mybirth = setInterval(() => {
    let birthDate = new Date("June 20 2024 00:00:00").getTime();

    let currentDate = new Date().getTime();

    let remain = birthDate - currentDate;

    let days = Math.floor(remain / 1000 / 60 / 60 / 24)
    let hours = Math.floor(remain % (1000 * 60 * 60 *24) / 1000 / 60 / 60)
    let minutes = Math.floor(remain % (1000 * 60 * 60 ) / 1000 / 60 );
    let seconds = Math.floor(remain % (1000 * 60 ) / 1000);


    daysT.innerHTML = days;
    hoursT.innerHTML = hours < 10 ? `0${hours}`: hours;
    minutesT.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    secondsT.innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (remain < 1000){
        clearInterval(mybirth)
        containerEn.classList.add("dis-none");
        container.classList.remove("dis-none");
        const audio = document.getElementById("myAudio");
        audio.autoplay  = true;
        audio.load();
    }

}, 1000)
