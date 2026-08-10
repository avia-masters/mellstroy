// ===== АНИМАЦИЯ ПОЯВЛЕНИЯ =====
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.hero, .game-card, .bonus-box, .review, .faq-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===== МОБИЛЬНОЕ МЕНЮ (для будущих доработок) =====
// Здесь можно добавить функционал бургер-меню, если понадобится
console.log('Сайт загружен. Дизайн — как Mellstroy.');
