const nav_bar = document.querySelectorAll("#nav-bar li a");
nav_bar.forEach((nav) => {
  nav.addEventListener("click", () => {
    for (let i = 0; i < nav_bar.length; i++) {
      nav_bar[i].classList.remove("active");
    }
    nav.classList.add("active");
    navs.classList.toggle("nav-bar-right");
  });
});

const bars = document.querySelector("#bars");
const navs = document.querySelector(".nav-bar");
bars.addEventListener("click", () => {
  navs.classList.toggle("nav-bar-right");
});
