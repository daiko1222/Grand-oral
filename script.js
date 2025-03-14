document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav');
    const contactLink = document.querySelector('.contact');
    const connexionBtn = document.querySelector('.connexion');

    // Si le menu burger existe, gérer l'affichage du menu
    if (burgerMenu && nav) {
        burgerMenu.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // Déplacer le bouton "Contact" dans le menu burger lorsque l'écran est petit
    if (window.innerWidth <= 768) {
        const contactMenuItem = contactLink.parentElement;
        const burgerNav = nav.querySelector('ul');
        burgerNav.appendChild(contactMenuItem);
    }

    // Si la fenêtre change de taille, réajuster
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            const contactMenuItem = contactLink.parentElement;
            const navList = nav.querySelector('ul');
            if (!navList.contains(contactMenuItem)) {
                navList.appendChild(contactMenuItem);
            }
        }
    });
});
