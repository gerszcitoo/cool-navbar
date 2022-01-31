// ---------------- MOBILE BURGER MENU ANIMATION-----------
$('.mobile-nav').click(function() {
    $(".nav").toggleClass("mobile-nav");
    $(this).toggleClass("is-active");
});
// ----------------- MOBILE MENU DEPLOY-------------
const navToggle = document.querySelector(".mobile-nav");
const primaryNav = document.querySelector(".primary-nav");
navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");
    const aria = primaryNav.getAttribute("aria-expanded")
    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        primaryNav.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        primaryNav.setAttribute("aria-expanded", false);
    }
});