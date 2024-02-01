/**
 * Represents the element with the class 'number-hours'.
 * @type {HTMLElement}
 */
const numberHours=document.querySelector('.number-hours');
const barSeconds = document.querySelector('.bar-seconds');
const numberElement=[];
const barElement=[];

 
//create number hours
for(let i=1;i <=12;i++){
    numberElement.push(
        `<span style="--index:${i};"><p>${i}</p></span>`
    );
   
}
numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));

//create bar seconds
for(let i=1; i<=60; i++){
    barElement.push(
        `<span style="--index:${i};"><p></p></span>`
    );
}
barSeconds.insertAdjacentHTML("afterbegin", barElement.join(""));