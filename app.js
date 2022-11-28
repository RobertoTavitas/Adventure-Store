let menuBtn = document.querySelector('#menu-btn');
let navClose = document.querySelector('#nav-close');
let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let searchBtn = document.querySelector('#search-btn');
let closeSearch = document.querySelector('#close-search');

window.onscroll = () => {
  navbar.classList.remove('active');
}

function onClassAdd(btn, target) {
  btn.onclick = () => {
    target.classList.add('active');
  }
}

function onClassDel(btn, target) {
  btn.onclick = () => {
    target.classList.remove('active');
  }
}

onClassAdd(menuBtn, navbar);
onClassAdd(searchBtn, searchForm);

onClassDel(navClose, navbar);
onClassDel(closeSearch, searchForm);

let swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});