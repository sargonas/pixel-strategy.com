 // ------------- Hamburger menu --------------
    document.querySelector('.hamburger-menu').addEventListener('click', function () {
        document.querySelector('.hamburger-menu .line-top').classList.toggle('current');
        document.querySelector('.hamburger-menu .line-center').classList.toggle('current');
        document.querySelector('.hamburger-menu .line-bottom').classList.toggle('current');
        document.querySelector('.menu').classList.toggle('show');
    });

