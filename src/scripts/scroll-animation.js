// src/scripts/scroll-animations.js
const animatedElements = document.querySelectorAll('.animado');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animacionS');
            // Opcional: deja de observar el elemento una vez animado
            // observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // Se activa cuando el 10% del elemento es visible
});

animatedElements.forEach(el => {
    observer.observe(el);
});