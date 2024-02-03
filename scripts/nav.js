const Navigation = document.querySelector(".nav-bar");
const ToggleNav = document.querySelector(".nav-toggle");

ToggleNav.addEventListener("click", () => {
    const visibility = Navigation.getAttribute('data-visible');
    if (visibility === "false") {
        Navigation.setAttribute('data-visible', "true");
        ToggleNav.classList.add('close')
    } else {
        Navigation.setAttribute("data-visible", "false");
        ToggleNav.classList.remove('close')
    }
});