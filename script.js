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

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')
const dropDownLink = document.querySelector('.dropdown_link')

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

dropDownLink.onclick = function () {
  dropDownMenu.classList.toggle('open')
}

