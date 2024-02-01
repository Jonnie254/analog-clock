/**
 * Represents the element with the class 'number-hours'.
 * @type {HTMLElement}
 */
const numberHours=document.querySelector('.number-hours');
const numberElement=[];
 
//create number hours
for(let i=1;i <=12;i++){
    numberElement.push(
        `<span style="--index:${i};"><p>${i}</p></span>`
    );
   
}
numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));
