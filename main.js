const nav = document.getElementById('menu');
const overlay = document.getElementById('overlay');
const hamburgerIcon = document.getElementById('hamburger-icon');

const openFeatures = document.getElementById('open-features');
const openCompany = document.getElementById('open-company');
const submenuFeatures = document.getElementById('submenu-features');
const submenuCompany = document.getElementById('submenu-company');

// controlling slide-menu on mobile
hamburgerIcon.addEventListener('click', () => {
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


// controlling sub-menu1 on desktop
openFeatures.addEventListener('click', (e) => {
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

// controlling sub-menu2 on desktop
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

// for desktop layout the nav is always visible.
var x = window.matchMedia("(min-width: 1440px)")
    x.addListener(() => {
        if (x.matches) { // If media query matches
            nav.setAttribute('aria-hidden', 'false');
        } else {
            nav.setAttribute('aria-hidden', 'true');
        }
    }) 