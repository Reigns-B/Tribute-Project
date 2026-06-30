// ===== BACK TO TOP BUTTON =====
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('nav a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== FORM SUBMISSION HANDLER =====
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your tribute! This is a demo form — in a real project, this would be sent to a server.');
});