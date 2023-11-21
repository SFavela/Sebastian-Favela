document.querySelector(".menu-btn").addEventListener("click", () => {
    toggleMenu();
});
function toggleMenu() {
    const sideMenu = document.querySelector(".side-menu");
    const content = document.querySelector(".content");

    if (sideMenu.style.width === "250px") {
        sideMenu.style.width = "0";
        content.style.marginLeft = "0";
    } else {
        sideMenu.style.width = "250px";
        content.style.marginLeft = "250px";
    }
}

document.querySelector(".menu-btn").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");


function animateBars(){
  line1__bars.classList.toggle("activeline1__bars-menu");
  line2__bars.classList.toggle("activeline2__bars-menu");
  line3__bars.classList.toggle("activeline3__bars-menu");
}

