/**
 * Represents the element with the class 'number-hours'.
 * @type {HTMLElement}
 */
const numberHours = document.querySelector(".number-hours");
const barSeconds = document.querySelector(".bar-seconds");
const numberElement = [];
const barElement = [];
const digitalDisplay = document.getElementById("digital-display");

//create number hours
for (let i = 1; i <= 12; i++) {
  numberElement.push(`<span style="--index:${i};"><p>${i}</p></span>`);
}
numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));

//create bar seconds
for (let i = 1; i <= 60; i++) {
  barElement.push(`<span style="--index:${i};"><p></p></span>`);
}
barSeconds.insertAdjacentHTML("afterbegin", barElement.join(""));
const handHours = document.querySelector(".hand.hours");
const handMinutes = document.querySelector(".hand.minutes");
const handSeconds = document.querySelector(".hand.seconds");

//function to get the current time
function getCurrentTime() {
  let date = new Date();
  let currentHours = date.getHours();
  let currentMinutes = date.getMinutes();
  let currentSeconds = date.getSeconds();
  let ampm = currentHours >= 12 ? "PM" : "AM";

  // Format hours to 12-hour format
  currentHours = currentHours % 12 || 12;

  // Update the digital clock content
  digitalDisplay.textContent = `${String(currentHours).padStart(
    2,
    "0"
  )}:${String(currentMinutes).padStart(2, "0")}:${String(
    currentSeconds
  ).padStart(2, "0")} ${ampm}`;
   
  //update the analog clock hands
  handHours.style.transform = `rotate(${
    currentHours * 30 + currentMinutes / 2
  }deg)`;
  handMinutes.style.transform = `rotate(${currentMinutes * 6}deg)`;
  handSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`;
}
//call function getCurrentTime on page load
getCurrentTime(getCurrentTime, 1000);

//call function getCurrentTime to set clock hands every second
//1000ms = 1s
setInterval(getCurrentTime, 1000);
