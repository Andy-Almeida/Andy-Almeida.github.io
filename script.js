document.addEventListener('DOMContentLoaded', function () {
    // JavaScript to offset scroll position by the height of the fixed header
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            const headerHeight = document.querySelector('header').offsetHeight; // Get the height of the fixed header

            if (this.getAttribute('href') === '#home') {
                // If clicking the #home link, scroll to the top of the page
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                // Otherwise, scroll to the target section with offset for fixed header
                window.scrollTo({
                    top: target.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
});

