// JavaScript for handling the hamburger menu and footer dates
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    hamburger.addEventListener("click", function() {
        navMenu.classList.toggle("show");
        hamburger.textContent = navMenu.classList.contains("show") ? "✕" : "☰";
    });

    // Set current year and last modified date in footer
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});
