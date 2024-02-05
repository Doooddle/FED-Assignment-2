var Navigation = document.querySelector(".nav-bar");
var ToggleNav = document.querySelector(".nav-toggle");

ToggleNav.addEventListener("click", function() {
    var visibility = Navigation.getAttribute('data-visible');
    if (visibility === "false") {
        Navigation.setAttribute('data-visible', "true");
        ToggleNav.classList.add('close');
    } else {
        Navigation.setAttribute("data-visible", "false");
        ToggleNav.classList.remove('close');
    }
});