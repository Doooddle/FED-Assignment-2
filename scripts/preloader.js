/*jshint esversion: 6 */ 
// Used to show lottie animation before page loads fully
var loader = document.querySelector(".loader");

window.addEventListener("load", vanish);


// Function to hide the loader animation
function vanish() {
  loader.classList.add("disppear");       // Add the "disappear" class to the loader element
}