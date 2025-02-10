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

const form = document.getElementById('contactForm');
const thankYou = document.getElementById('thank-you');

// Form Section 

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL'; // **REPLACE THIS**

    fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify({ fullName, email, message }),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
        if (response.ok) {
            form.style.display = 'none';
            thankYou.style.display = 'block';
        } else {
            console.error('Error submitting form:', response.status);
            alert("An error occurred while submitting the form. Please try again later.");
        }
    })
    .catch(error => {
        console.error('Error submitting form:', error);
        alert("An error occurred while submitting the form. Please try again later.");
    });
});;
