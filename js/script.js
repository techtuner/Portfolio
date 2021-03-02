//Typed Js
var typed = new Typed(".typing", {
  strings: ["Web Developer", "Gamer", "Designer"],
  typeSpeed: 50,
  backSpeed: 60,
  loop: true,
});
//Navbar Styling
const navSlide = () => {
  const burger = document.querySelector(".hamburger");
  const nav = document.querySelector(".nav-links");

  //Toggle Nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};
navSlide();
