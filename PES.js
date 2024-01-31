const header = document.querySelector("header");
const logo = header.querySelector(".logo"); // Sélection spécifique du logo à l'intérieur de l'élément header

function updateHeader() {
    if (window.scrollY > 0) { // Changer ici pour inverser l'effet
        header.classList.add("expanding");
        logo.classList.add("expanding");
    } else {
        header.classList.remove("expanding");
        logo.classList.remove("expanding");
    }
}

// Appeler la fonction lors du chargement initial de la page
updateHeader();

// Ajouter un écouteur d'événement pour le défilement
window.addEventListener("scroll", updateHeader);
