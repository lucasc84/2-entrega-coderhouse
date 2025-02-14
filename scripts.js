document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const header = document.getElementById('main-header');
        const navbar = document.querySelector('.navbar');
        const headerHeight = header.offsetHeight;

        if (window.scrollY > headerHeight) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});