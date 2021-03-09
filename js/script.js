"use strict";

//variables
const navBar = document.querySelector(".navigation");
const header = document.querySelector(".header");
const navBtn = document.querySelector(".navigation__button-box");
const navLinks = document.querySelector(".navigation__links");
const headerBottom = document.querySelector(".header-bottom");
const closeIcon = document.getElementById("close-menu");
const openIcon = document.getElementById("open-menu");
const contact = document.getElementById("contact");
const footer = document.querySelector(".footer");
const extendBtn = document.querySelectorAll(".extend");
const description = document.querySelectorAll(".description__sub");
const date = new Date().getFullYear();

const sticky = navBar.offsetTop;
const headerSticky = headerBottom.offsetTop;
//sticky navigation bar
window.onscroll = function () {
  stickyNav();
};

function stickyNav() {
  if (window.pageYOffset > sticky) {
    navBar.classList.add("sticky");
    navLinks.classList.remove("menu-open");
    openIcon.style.display = "block";
    closeIcon.style.display = "none";
  } else {
    navBar.classList.remove("sticky");
  }
}

//menu click 
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
contact.addEventListener("click", menuClick);

//project description accordian
for (let i = 0; i < extendBtn.length; i++) {
  extendBtn[i].addEventListener("click", function () {
    description[i].classList.toggle("show");
  });
}

//footer 
footer.innerHTML = `&copy; Nicole Nam ${date}`;
