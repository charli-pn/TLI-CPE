window.onload = function() {
    main();
  };


function main(){

    var champName = document.getElementById('name');
    var champFirstName = document.getElementById('firstName');
    var champEmail = document.getElementById('email');
    var champPhoneNumber = document.getElementById('phoneNumber');
    var champDepart = document.getElementById('depart');
    var champRetour = document.getElementById('retour');
    var champAdultNumber = document.getElementById('adultNumber');
    var champChildNumber = document.getElementById('childNumber');
    var champBreakfast = document.getElementById('breakfast');
    var champDemande = document.getElementById('demande');

    var champTotalPrice = document.getElementById('totalPrice');

    let usp = new URLSearchParams(window.location.search);

    champName.innerHTML = usp.get("name");
    champFirstName.innerHTML = usp.get("firstName");
    champEmail.innerHTML = usp.get("email");
    champPhoneNumber.innerHTML = usp.get("phoneNumber");

    champDepart.innerHTML = usp.get("depart");
    champRetour.innerHTML = usp.get("retour");
    champAdultNumber.innerHTML = usp.get("adultNumber");
    champChildNumber.innerHTML = usp.get("childNumber");
    champBreakfast.innerHTML = usp.get("breakfast");
    champDemande.innerHTML = usp.get("demande");

    champTotalPrice.innerHTML = document.cookie;

}

