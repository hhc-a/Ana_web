function toggleMenu() {
    const menu = document.getElementById("menuContent");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}