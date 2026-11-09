// GET THE MENU BUTTON AND NAVIGATION LINKS
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// OPEN AND CLOSE THE MOBILE MENU
menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("show");
});

// CLOSE THE MENU AFTER A LINK IS CLICKED
const links = navLinks.querySelectorAll("a");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("show");
    });
});

// CONTACT FORM FUNCTIONALITY
const contactForm = document.getElementById("contactForm");
const thankYou = document.getElementById("thankYou");

contactForm.addEventListener("submit", function(event) {
    // Stop the page from refreshing
    event.preventDefault();

    // Display a thank-you message
    thankYou.textContent = "Thank you! Your message has been received.";

    // Clear the form
    contactForm.reset();
});
