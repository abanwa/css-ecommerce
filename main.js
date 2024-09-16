let search = document.querySelector(".search-box");
let cart = document.querySelector(".cart");
let user = document.querySelector(".user");
let navbar = document.querySelector(".navbar");

document.querySelector("#search-icon").onclick = () => {
  cart.classList.remove("active");
  user.classList.remove("active");
  navbar.classList.remove("active");
  search.classList.toggle("active");
};

document.querySelector("#cart-icon").onclick = () => {
  search.classList.remove("active");
  user.classList.remove("active");
  navbar.classList.remove("active");
  cart.classList.toggle("active");
};

document.querySelector("#user-icon").onclick = () => {
  search.classList.remove("active");
  cart.classList.remove("active");
  navbar.classList.remove("active");
  user.classList.toggle("active");
};

document.querySelector("#menu-icon").onclick = () => {
  search.classList.remove("active");
  cart.classList.remove("active");
  user.classList.remove("active");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  search.classList.remove("active");
  cart.classList.remove("active");
  user.classList.remove("active");
  navbar.classList.remove("active");
};

// Navbar Scroll
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

var swiper = new Swiper(".new-arrival", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 0,
    },
    568: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
