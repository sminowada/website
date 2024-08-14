// app.js

document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector('.bonsai');

    function checkVisibility() {
        const triggerBottom = window.innerHeight / 5 * 3.5;
        const imageTop = image.getBoundingClientRect().top;

        if (imageTop < triggerBottom) {
            image.classList.add('visible');
        } else {
            image.classList.remove('visible');
        }
    }
    checkVisibility();

    window.addEventListener('scroll', checkVisibility);
});

document.addEventListener("DOMContentLoaded", function() {
    const image = document.querySelector('.soccer');

    function checkVisibility() {
        const triggerBottom = window.innerHeight / 5 * 3.5;
        const imageTop = image.getBoundingClientRect().top;

        if (imageTop < triggerBottom) {
            image.classList.add('visible');
        } else {
            image.classList.remove('visible');
        }
    }
    checkVisibility();

    window.addEventListener('scroll', checkVisibility);
});

const see = document.querySelector('.seelab')
const ski = document.querySelector('.ski')
const curio = document.querySelector('.curio')

function addHighlightClass() {
    see.classList.add('experience');
    ski.classList.add('experience');
    curio.classList.add('experience');
}
addHighlightClass();