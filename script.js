// Add smooth scrolling to navbar links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // Get the target element ID
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

const typedTextSpan = document.getElementById("typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Department of CST & AI-ML"]; // Array of texts to type
const typingDelay = 50; // Delay between typing each character
const erasingDelay = 50; // Delay between erasing each character
const newTextDelay = 2000; // Delay before typing the next text

let textArrayIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingDelay);
    } else {
        setTimeout(eraseText, newTextDelay);
    }
}

function eraseText() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(typeText, typingDelay + 1100); // added a delay before the next text starts typing
    }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load
    if (textArray.length) setTimeout(typeText, newTextDelay + 250); // added a slight delay before the typing animation starts
});