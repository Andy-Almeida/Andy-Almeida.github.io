// JavaScript to offset scroll position by the height of the fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const headerHeight = document.querySelector('header').offsetHeight; // Get the height of the fixed header

        window.scrollTo({
            top: target.offsetTop - headerHeight + 10,
            behavior: 'smooth'
        });
    });
});

