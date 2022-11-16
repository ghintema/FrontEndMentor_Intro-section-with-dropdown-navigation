const nav = document.getElementById('menu');
const overlay = document.getElementById('overlay');
const hamburgerIcon = document.getElementById('hamburger-icon');

const openFeatures = document.getElementById('open-features');
const openCompany = document.getElementById('open-company');
const submenuFeatures = document.getElementById('submenu-features');
const submenuCompany = document.getElementById('submenu-company');


hamburgerIcon.addEventListener('click', () => {
    console.log('test')
    nav.classList.toggle('showNav');
    overlay.classList.toggle('showOverlay');
    hamburgerIcon.classList.toggle('crossIcon')

    if (nav.classList.contains('showNav')) {
        hamburgerIcon.setAttribute('aria-expanded', 'true');
        nav.setAttribute('aria-hidden', 'false');
    } else {
        hamburgerIcon.setAttribute('aria-expanded', 'false');
        nav.setAttribute('aria-hidden', 'true');
    }
})

console.log(openCompany)

openFeatures.addEventListener('click', (e) => {
    console.log('test')
    submenuFeatures.classList.toggle('showSubmenu');
    submenuCompany.classList.remove('showSubmenu');

    openFeatures.firstElementChild.classList.toggle('turnIcon')
    openCompany.firstElementChild.classList.remove('turnIcon')

    if (submenuFeatures.classList.contains('showSubmenu')) {
        openFeatures.setAttribute('aria-expanded', 'true');
        submenuFeatures.setAttribute('aria-hidden', 'false')
    } else {
        openFeatures.setAttribute('aria-expanded', 'false');
        submenuFeatures.setAttribute('aria-hidden', 'true')
    }

    if (submenuCompany.classList.contains('showSubmenu')) {
        openCompany.setAttribute('aria-expanded', 'true');
        submenuCompany.setAttribute('aria-hidden', 'false')
    } else {
        openCompany.setAttribute('aria-expanded', 'false');
        submenuCompany.setAttribute('aria-hidden', 'true')
    }
})

openCompany.addEventListener('click', (e) => {
    submenuCompany.classList.toggle('showSubmenu');
    submenuFeatures.classList.remove('showSubmenu');
    openCompany.firstElementChild.classList.toggle('turnIcon')
    openFeatures.firstElementChild.classList.remove('turnIcon')

    if (submenuCompany.classList.contains('showSubmenu')) {
        openCompany.setAttribute('aria-expanded', 'true');
        submenuCompany.setAttribute('aria-hidden', 'false')
    } else {
        openCompany.setAttribute('aria-expanded', 'false');
        submenuCompany.setAttribute('aria-hidden', 'true')
    }

    if (submenuFeatures.classList.contains('showSubmenu')) {
        openFeatures.setAttribute('aria-expanded', 'true');
        submenuFeatures.setAttribute('aria-hidden', 'false')
    } else {
        openFeatures.setAttribute('aria-expanded', 'false');
        submenuFeatures.setAttribute('aria-hidden', 'true')
    }
})

