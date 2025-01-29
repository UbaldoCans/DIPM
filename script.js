document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li a');

    // Función para alternar el menú
    const toggleMenu = () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    };

    // Cierra el menú cuando se hace clic en un enlace
    const closeMenu = () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    };

    // Event listeners
    hamburger.addEventListener('click', toggleMenu);

    // Cerrar menú cuando se hace clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Cerrar menú cuando se hace clic fuera
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            closeMenu();
        }
    });

    // Prevenir que el menú se cierre cuando se hace clic dentro de él
    navMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Manejar redimensionamiento de ventana
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
});