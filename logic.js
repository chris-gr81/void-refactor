const navbarHamburgerEl = document.getElementById("hamburger");
const navbarLinksEl = document.getElementById("navbarLinks");

navbarHamburgerEl.addEventListener("click", () => {
  navbarLinksEl.classList.toggle("navbar__links--active");
  navbarHamburgerEl.classList.toggle("navbar__hamburger--active");

  const expanded = navbarHamburgerEl.getAttribute("aria-expanded") === "true";
  navbarHamburgerEl.setAttribute("aria-expanded", String(!expanded));
});
