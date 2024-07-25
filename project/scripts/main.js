document.addEventListener('DOMContentLoaded', () => {
    // Toggle mobile navigation menu
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Carousel functionality
    const carousel = document.querySelector('.carousel');
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2; //scroll-fast
        carousel.scrollLeft = scrollLeft - walk;
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

    // Remove the extra dot from the last service
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


