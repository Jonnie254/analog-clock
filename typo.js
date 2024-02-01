//show letters one by one to create a typo effect
const dynamicText = document.querySelector("p span");
const words=["Analog clock","Done In", "HTMl", "CSS", "JavaScript","Done By", "Jonnie"];
let wordIndex =0;
let charIndex =1;
let isDeleting = false;
const typeEffect = () =>{
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    if(!isDeleting && charIndex < currentWord.length){
        //if condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    }
   
}
typeEffect();