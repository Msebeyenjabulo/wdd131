document.addEventListener('DOMContentLoaded', () => {
    // Toggle mobile navigation menu
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });


    // Form validation
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const message = document.querySelector('#message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
        } else {
            alert('Thank you for your message!');
            form.reset();
        }
    });

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\\.,;:\s@"]+\.[^<>()\[\]\\.,;:\s@"]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    console.log("Crowdly Media website loaded");
});

document.addEventListener('DOMContentLoaded', () => {
    // Chunky text hover effect
    const chunkyText = document.querySelector('.chunky-text');
    const services = chunkyText.innerText.trim().split('. ');

    chunkyText.innerHTML = services.map(service => `<span>${service}.</span>`).join(' ');

    const lastService = chunkyText.querySelector('span:last-child');
    lastService.innerHTML = lastService.innerText.slice(0, -1);
});

document.addEventListener('DOMContentLoaded', () => {
    // Chunky text hover effect
    const chunkyText = document.querySelector('.chunky-text');
    const services = chunkyText.innerText.split(', ');

    chunkyText.innerHTML = services.map(service => `<span>${service}</span>`).join(', ');

});

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
    hamburger.classList.toggle('active'); // Optional: for styling the active state
});

