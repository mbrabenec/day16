
let menuCol = document.getElementById("menu__col");

document.getElementById("burger").addEventListener("mouseenter", () => {
    menuCol.classList.toggle("menuShow");
});

document.getElementById("menu__col").addEventListener("mouseleave", () => {
    menuCol.classList.toggle("menuShow");
});




