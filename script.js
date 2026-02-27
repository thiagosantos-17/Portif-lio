// Menu Mobile
const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
const icon = menuToggle.querySelector('i');

// Função única para abrir e fechar o menu
function toggleMenu() {
    navMenu.classList.toggle('active');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
}

// 1. Abrir/Fechar ao clicar no botão hambúrguer
menuToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que o clique feche o menu imediatamente
    toggleMenu();
});

// 2. Fechar ao clicar em qualquer link do menu
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if(navMenu.classList.contains('active')) toggleMenu();
    });
});

// 3. Fechar ao clicar em qualquer lugar FORA do menu
window.addEventListener('click', (e) => {
    // Se o menu está aberto E o clique não foi dentro do menu E nem no botão hambúrguer
    if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && e.target !== menuToggle) {
        toggleMenu();
    }
});

// 4. Fechar automaticamente ao rolar a página (Opcional, mas melhora a UX)
window.addEventListener('scroll', () => {
    if (navMenu.classList.contains('active')) {
        toggleMenu();
    }
});

// Fecha menu ao clicar nos links
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
    });
});

// Revelação ao Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));