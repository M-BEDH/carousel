// Script pour le diaporama d'images
document.addEventListener("DOMContentLoaded", function () {
    // Fonction pour créer un élément et l'ajouter à un parent
    function create(tag, parent, className = "", text = "") {
        if (!parent) {
            console.error(`Erreur : parent null pour l'élément <${tag}>`);
            return null;
        }
        let e = document.createElement(tag);
        if (className) e.className = className;
        if (text) e.innerHTML = text;
        parent.appendChild(e);
        return e;
    }

// Les vérifications de l'existence du conteneur sont commentées pour éviter les erreurs si le conteneur n'existe pas

    // Vérification de l'existence du conteneur
    let carousel = document.getElementById("carousel");
    if (!carousel) {
        console.error("Erreur : L'élément #carousel est introuvable.");
        return;
    }



    // Liste des images et descriptions  ********************************************INSERTIONS DES IMAGES ET DESCRIPTIONS ***************************************************
    // Images et descriptions à insérer dans le diaporama
    let images = [
        "photo1.jpg", "photo2.jpg", "photo3.jpg"
        // Ajoutez d'autres images si nécessaire
    ];
    
    let descriptions = [
        "Description de la photo 1", "Description de la photo 2", "Description de la photo 3"
    ];

    // Création du diaporama   *********************************************CRÉATION DU DIAPORAMA *************************************************** 
    // Fonction pour créer le diaporama

    
    
    function createDiaporama(parent, images, descriptions) {
        images.forEach((image, i) => {
            let slide = create("div", parent, "slide");
            let figure = create("figure", slide);
            let img = create("img", figure);
            img.src = `Images/${image}`;  // Chemin vers les images attention faire le changement
            img.alt = descriptions[i];
            create("figcaption", figure, "", descriptions[i]);
        });
    }


    // Appel de la fonction pour créer le diaporama
    createDiaporama(carousel, images, descriptions);

    // Gestion du diaporama
    let slides = carousel.children;
    let index = 0;
    slides[index].classList.add("active");

    // Fonction pour changer de slide et démarrer le diaporama automatique
    // Commentée pour éviter l'exécution automatique du diaporama

    // function diaporama() {
    //     slides[index].classList.remove("active");
    //     index = (index + 1) % slides.length;
    //     slides[index].classList.add("active");
    // }


//*    // Décommenter la ligne suivante pour activer le diaporama automatique
    // let interval = setInterval(diaporama, 4000);

    // Décommenter les lignes suivantes pour ajouter la pause au survol de la souris

    // carousel.addEventListener("mouseover", () => clearInterval(interval));
    // carousel.addEventListener("mouseout", () => interval = setInterval(diaporama, 4000));



    // Ajout des boutons de navigation
    let controls = create("div", carousel.parentNode, "controls");
    let prevButton = create("button", controls, "prev", "Précédente");
    let nextButton = create("button", controls, "next", "Suivante");

    prevButton.addEventListener("click", function () {
        slides[index].classList.remove("active");
        index = (index - 1 + slides.length) % slides.length;
        slides[index].classList.add("active");
    });

    nextButton.addEventListener("click", function () {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    });
});