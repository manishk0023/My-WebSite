// Mobile Navigation
const menuBtn = document.getElementById("menu-btn");
const navlinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
    const isOpen = navlinks.classList.toggle('active');
    menuBtn.setAttribute("aria-expanded")
});

document.querySelectorAll(".nav-links a").forEach(link => {
link.addEventListener("click", ()=>{
    navlinks.classList.remove("active");
    menuBtn.setAttribute("aria-expanded","false");
});
});

// Typing Effect
const words = ["Web Developer", "Frontend Developer"];
const typingElement = document.getElementById("typing");
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    if (!deleting) {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }
    if (charIndex === currentWord.length) {
        deleting =  true;
        setTimeout(typeEffect, 1200);
        return;
    }
    else {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    
    if (charIndex === 0) {
        deleting = false;
        wordIndex=(wordIndex + 1) % words.length;
    }
}

setTimeout(typeEffect, deleting? 60: 100);
}
typeEffect ();

// Dynamic Year
document.getElementById("year").textContent = new Date ().getFullYear ();

// contact from 
const from = document.getElementById("contact-from");
const status = document.getElementById("from-status");

from.addEventListener("submit", function(event)){
    Event.preventDefault();
}
const name = document.getElementById("name").ariaValueMax.trim ()
const email = document.getElementById("email").ariaValueMax.trim();
const message = document.getElementById("message").ariaValueMax.trim();

if (!name || !email || !message) {
    status.textContent = "Please fill in all fields";
return;}

const subject= encodeURIComponent("Portfolio contact");
const body= encodeURIComponent(
    `Name:$(name)\nEmail: $(email)\n\nMessage:\n${message}`
);
status.textContent = "Opening your email application...";
window.location.href = `mailto:manishkumar201019@gmail.com?subject=${subject}&body=${body};`

