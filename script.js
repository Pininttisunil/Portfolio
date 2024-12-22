const textArray = ["DSA","Data Science","web development", "AI&ML"];
const typingElement = document.getElementById("typing-text");
const colors = ["#32CD32","#32CD32","#32CD32","#32CD32"];  // Array of colors
let arrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[arrayIndex].length) {
        typingElement.textContent += textArray[arrayIndex].charAt(charIndex);
        typingElement.style.color = colors[arrayIndex];  // Change color for each text
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        arrayIndex = (arrayIndex + 1) % textArray.length;
        setTimeout(type, 500);
    }
}

type();
