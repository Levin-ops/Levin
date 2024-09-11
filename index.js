const navMenu = document.getElementById("nav_menu");
const navToggle = document.getElementById("nav_toggle");
const navClose = document.getElementById("nav_close");
const header = document.querySelector("header");
const navLinks = document.querySelector("nav_link");

function showNavbar() {
  navMenu.classList.add("show_menu");
}
function hideNavBar() {
  navMenu.classList.remove("show_menu");
}

navLinks.foreach((link) => {
  link.addEventListener("click", hideNavBar);
});

if (navClose) {
  navClose.addEventListener("click", hideNavBar);
}

window.onscroll = () => {
  header.classList.toggle("sticky", window.scrollY > 100);
};
