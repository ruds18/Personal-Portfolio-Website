const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 600) {
        navbar.style.display = "block";
    } else {
        navbar.style.display = "none";
    }
});