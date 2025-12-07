const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

/* TOGGLE MENU */
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("open");
});

/* OPTIONAL: Animate hamburger lines */
hamburger.addEventListener("click", () => {
    const spans = hamburger.querySelectorAll("span");
    spans[0].classList.toggle("rotate-down");
    spans[1].classList.toggle("fade");
    spans[2].classList.toggle("rotate-up");
});
