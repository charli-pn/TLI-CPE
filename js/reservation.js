// Formulaire
var formIsValid = false;

// Détails du voyage
var voyageTitle;
var voyagePrice;

// Nom
var champName;
var nameIsValid = false;

// Prenom
var champFirstName;
var firstNameIsValid = false;

// Email
var champEmail;
var emailIsValid = false;

// Numéro
var champPhoneNumber;

// Dates du séjour
var champDepart;
var champRetour;
var dateAreValid = false;

// Nombre d'adultes
var champAdultNumber;
var adultNumberIsValid = false;

// Nombre d'enfants
var champChildNumber;
var childNumberIsValid = false;

// petit-dej
var champBreakfast;

// demande spécial
var champDemande;

// Bouton submit
var submitBtn;

// Voyage selectionné
var selectedVoyage;

window.onload = function() {
    main();
  };

  function main(){

    champName = document.getElementById('name');
    champFirstName = document.getElementById('firstName');
    champEmail = document.getElementById('email');
    champPhoneNumber = document.getElementById('phoneNumber');
    champDepart = document.getElementById('depart');
    champRetour = document.getElementById('retour');
    champAdultNumber = document.getElementById('adultNumber');
    champChildNumber = document.getElementById('childNumber');
    champBreakfast = document.getElementById('breakfast');
    champDemande = document.getElementById('demande');

    var totalPrice = document.getElementById('totalPrice');

    submitBtn = document.getElementById('submit');
    voyageTitle = document.getElementById("voyageTitle");
    voyagePrice = document.getElementById("voyagePrice");


    // On récupère l'id du voyage selectioné dans l'url
    let voyageId = new URLSearchParams(window.location.search).get("voyageId");
    if(voyageId===null)voyageId = 0;
    let voyageArray = getVoyageArray();

    selectedVoyage = voyageArray[voyageId];

    // On met à jour les informations sur la page concernant le voyage selectioné
    voyageTitle.innerHTML = "Voyage selectionné: " + selectedVoyage.title;
    voyagePrice.innerHTML = "Prix par jour par adulte: " + selectedVoyage.price;

    champName.onchange = () => {
        // Regex alphanumeric
        nameIsValid = champName.value.match(/^[a-zA-Z]+$/)!== null;
        testFormValidity();
    }

    champFirstName.onchange = () => {
        // Regex alphanumeric
        firstNameIsValid = champFirstName.value.match(/^[a-zA-Z]+$/)!== null;
        testFormValidity();
    }

    champEmail.onchange = () => {
        // Regex de validation email simplifié
        emailIsValid = champEmail.value.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z]+$/)!== null;
        testFormValidity();
    }

    champDepart.onchange = () => {
        testDepartRetourValidity();
        testFormValidity();
    }

    champRetour.onchange = () => {
        testDepartRetourValidity();
        testFormValidity();
    }

    champAdultNumber.onchange = () => {
        let adultCount = champAdultNumber.value;
        adultNumberIsValid = (adultCount!="" && adultCount>0)
        testFormValidity();
    }

    champChildNumber.onchange = () => {
        let childCount = champChildNumber.value;
        childNumberIsValid = (childCount!="")
        testFormValidity();
    }

    champBreakfast.onchange = testFormValidity;

    // On provoque une vérification au chargement au cas ou le navigateur pré-rempli des champs
    emitChangeOnFormElement()
  }

// Test la date de départ et de retour
function testDepartRetourValidity(){
    dateAreValid = false;

    if(champDepart.value==="" || champRetour.value ===""){
        //Un des deux date n'a pas été saisie
        return;
    }

    let dateDepart = new Date(champDepart.value);
    let dateRetour = new Date(champRetour.value);

    if(dateDepart < new Date()){
        //La date de départ est dans le passé
        return;
    }


    if(dateDepart >= dateRetour){
        // La date de départ est après la date de retour
        dateAreValid = false;
    }

    dateAreValid = true;
}

function testFormValidity(){
    formIsValid = nameIsValid && firstNameIsValid && emailIsValid && adultNumberIsValid && childNumberIsValid && dateAreValid;
    
    submitBtn.disabled = !formIsValid;

    if(formIsValid){
    let totalPrice = getPrice();
        document.cookie = totalPrice;
        totalPrice.innerHTML = "Prix total: "+totalPrice;
    } else {
        totalPrice.innerHTML = "";
    }

}

function emitChangeOnFormElement(){
    // On provoque l'emission d'un event change manuellement sur certains champs
    // C'est utilise en cas de rechargement de page si le navigateur prérempli des champs
    let eventChange = new Event("change");
    champFirstName.dispatchEvent(eventChange);
    champName.dispatchEvent(eventChange);
    champDepart.dispatchEvent(eventChange);
    champRetour.dispatchEvent(eventChange);
    champAdultNumber.dispatchEvent(eventChange);
    champChildNumber.dispatchEvent(eventChange);
    champEmail.dispatchEvent(eventChange);
}
