document.addEventListener("DOMContentLoaded", function () {
    const nomInput = document.getElementById("EntrezVotreNom");
    const prenomInput = document.getElementById("EntrezVotrePrenom");
    const emailInput = document.getElementById("email");
    const adresseInput = document.getElementById("adresse");
    const titreInput = document.getElementById("titre");
    const objectifInput = document.getElementById("VotreObjectifProfessionnel");
    const dateNaissanceInput = document.getElementById("dateNaissance");
    var age = document.getElementById("age").value;


    const nomRegex = /^[A-Z]+$/;
    const prenomRegex = /^[A-Z][a-zA-Z]*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const adresseRegex = /^[a-zA-Z0-9\s,'-]*$/;
    const titreRegex = /^[^0-9!@#$%^&*(),.?":{}|<>]+$/;
    const objectifRegex = /^[^0-9!@#$%^&*(),.?":{}|<>]+$/;


    nomInput.addEventListener("input", function () {
        if (!nomRegex.test(nomInput.value)) {
            nomInput.setCustomValidity("Le nom doit être en majuscule et ne contenir que des lettres.");
        } else {
            nomInput.setCustomValidity("");
        }
    });

    prenomInput.addEventListener("input", function () {
        if (!prenomRegex.test(prenomInput.value)) {
            prenomInput.setCustomValidity("Le prénom doit commencer par une majuscule et ne contenir que des lettres.");
        } else {
            prenomInput.setCustomValidity("");
        }
    });

    emailInput.addEventListener("input", function () {
        if (!emailRegex.test(emailInput.value)) {
            emailInput.setCustomValidity("L'adresse email n'est pas valide.");
        } else {
            emailInput.setCustomValidity("");
        }
    });

    adresseInput.addEventListener("input", function () {
        if (!adresseRegex.test(adresseInput.value)) {
            adresseInput.setCustomValidity("L'adresse ne doit pas contenir de caractères spéciaux.");
        } else {
            adresseInput.setCustomValidity("");
        }
    });

    titreInput.addEventListener("input", function () {
        if (!titreRegex.test(titreInput.value)) {
            titreInput.setCustomValidity("Le titre ne doit pas contenir de caractères spéciaux ou de chiffres.");
        } else {
            titreInput.setCustomValidity("");
        }
    });

    objectifInput.addEventListener("input", function () {
        if (!objectifRegex.test(objectifInput.value)) {
            objectifInput.setCustomValidity("L'objectif ne doit pas contenir de caractères spéciaux ou de chiffres.");
        } else {
            objectifInput.setCustomValidity("");
        }
    });

    dateNaissanceInput.addEventListener("input", function () {
        const dateNaissance = new Date(dateNaissanceInput.value);
        const aujourdHui = new Date();
        const differenceAnnees = aujourdHui.getFullYear() - dateNaissance.getFullYear();

        if (differenceAnnees < 18) {
            dateNaissanceInput.setCustomValidity("Vous devez avoir au moins 18 ans.");
        } else {
            dateNaissanceInput.setCustomValidity("");
        }
    });
    document.getElementById("cvForm").onsubmit = function(event) {
        var age = document.getElementById("age").value;
    
        // Vérifie si l'âge est supérieur à 18
        if (parseInt(age) <= 18) {
            alert("L'âge doit être supérieur à 18 ans.");
            event.preventDefault(); // Empêche l'envoi du formulaire si l'âge est inférieur ou égal à 18
        }
    };
    if (age < 18) {
        alert("Age must be greater than 18.");
        return false;
    }
    
    
    
});
