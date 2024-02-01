//show letters one by one to create a typo effect
const dynamicText = document.querySelector("p span");
const words=["To Jonnie's Analog clock", "Done In HTMl", "Done In CSS", "Done In JavaScript", "Done By Jonnie"];
let wordIndex = 0;
let charIndex = 0; // Initialize charIndex to 0
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;

    if(!isDeleting && charIndex < currentWord.length){
        //if condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if(isDeleting && charIndex > 0){
        //if condition is true, delete the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        //if condition is false, move to the next word
        isDeleting = !isDeleting; // Toggle isDeleting only when the whole word has been typed out
        if (isDeleting) {
            setTimeout(typeEffect, 1200);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 500);
        }
    }
}

typeEffect();