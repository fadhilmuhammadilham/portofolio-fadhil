//navbar fix
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixed = header.offsetTop;

    if (window.pageYOffset > fixed) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

//humburger
const humburger = document.querySelector('#humburger');
const navmenu = document.querySelector('#navMenu');

humburger.addEventListener('click', function () {
    humburger.classList.toggle('humburger-active');
    navmenu.classList.toggle('hidden');
});

//href home
const homeLink = document.querySelector('a[href="#home"]');
homeLink.addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('#home').scrollIntoView({
        behavior: 'smooth'
    });
});

//href skill
const skillLink = document.querySelector('a[href="#skill"]');
skillLink.addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('#skill').scrollIntoView({
        behavior: 'smooth'
    });
});

//href porto
const portoLink = document.querySelector('a[href="#porto"]');
portoLink.addEventListener('click', function (event) {
    event.preventDefault();
    // Mendapatkan posisi vertikal dari bagian "Portofolio"
    const portoSection = document.getElementById('porto');
    const portoSectionPosition = portoSection.offsetTop;
    // Mengatur scroll ke posisi tersebut dengan perilaku smooth
    window.scrollTo({
        top: portoSectionPosition,
        behavior: 'smooth'
    });
});


//href contact
const contactLink = document.querySelector('a[href="#contact"]');
portoLink.addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
});
