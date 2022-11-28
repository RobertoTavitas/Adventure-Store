window.onscroll = () => {
  navbar.classList.remove('active');

  if (window.scrollY > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
};
window.onload = () => {
  if (window.scrollY > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
}

function handleClass(btn, tg, op, c) {
  if (op == 'add') {
    btn.onclick = () => {
      tg.classList.add(c)
    }
  }
  if (op == 'remove') {
    btn.onclick = () => {
      tg.classList.remove(c)
    }
  }
}
// Open/Close mobile menu
handleClass(menuBtn, navbar, 'add', 'active');
handleClass(navClose, navbar, 'remove', 'active');
// Open/Close Search Form
handleClass(searchBtn, searchForm, 'add', 'active');
handleClass(closeSearch, searchForm, 'remove', 'active');


// Swiper carousel in Home Section
let homeSwiper = new Swiper(".home-slider", {
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


// Swiper carousel in Shop Section
let productSwiper = new Swiper(".product-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});