const showMenu = () => {
    document.querySelector('.mobile-nav__list').classList.toggle("show");
}

const activeLinks = document.querySelectorAll('.nav-list__item');

if(activeLinks.length) {
    activeLinks.forEach((activeLink) => {
        activeLink.addEventListener('click', (e) => {
            activeLinks.forEach((activeLink) => {
                activeLink.classList.remove('active');
            });
            e.preventDefault();
            activeLink.classList.add('active');
        });
    });
}