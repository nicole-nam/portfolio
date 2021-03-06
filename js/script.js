"use strict";

const navBar = document.querySelector(".navigation");
const header = document.querySelector(".header");
const sticky = navBar.offsetTop;
const navBtn = document.querySelector(".navigation__button-box");
const navLinks = document.querySelector(".navigation__links");
const closeIcon = document.getElementById("close-menu");
const openIcon = document.getElementById("open-menu");
const headerBottom = document.querySelector(".header-bottom");
const headerSticky = headerBottom.offsetTop;
const extendBtn = document.querySelectorAll(".extend");
const description = document.querySelectorAll(".description__sub");

//sticky navigation bar
window.onscroll = function () {
  stickyNav();
};

function stickyNav() {
  if (window.pageYOffset > sticky) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
}

function menuClick() {
  navLinks.classList.toggle("menu-open");
  if (navLinks.classList.contains("menu-open")) {
    openIcon.style.display = "none";
    closeIcon.style.display = "block";
    headerBottom.style.borderBottom = "1px solid white";
  } else {
    openIcon.style.display = "block";
    closeIcon.style.display = "none";
    headerBottom.style.borderBottom = "none";
  }
}

navBtn.addEventListener("click", menuClick);

//accordian

for (let i = 0; i < extendBtn.length; i++) {
  extendBtn[i].addEventListener("click", function () {
    description[i].classList.toggle("show");
  });
}
