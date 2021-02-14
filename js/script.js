"use strict";

const navBtn = document.querySelector(".navigation__button-box");
const navLinks = document.querySelector(".navigation__links");
const closeIcon = document.getElementById("close-menu");
const openIcon = document.getElementById("open-menu");
const headerBottom = document.querySelector(".header-bottom");

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
