//= components/slick.js

document.querySelector(".menu__btn").onclick = function() {open()};

function open() {
    document.querySelector(".menu__btn").classList.toggle("active");
    document.querySelector(".menu__list").classList.toggle("active");
    document.querySelector("body").classList.toggle("lock");
}