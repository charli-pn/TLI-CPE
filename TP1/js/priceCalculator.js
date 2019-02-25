function calculatePrice(days, basePrice, adultNumber, childNumber, breakfast){

    let totalprice = 0;

    days = parseInt(days);
    basePrice = parseFloat(basePrice);
    adultNumber = parseInt(adultNumber);
    childNumber = parseInt(childNumber);

    totalprice = basePrice*adultNumber // On ajoute le prix par jour des adultes
    totalprice += basePrice*childNumber*0.4 // On ajoute le prix par jour des enfants
    
    if(breakfast){
        totalprice += 8 * (childNumber+adultNumber) //Petit déjeuné
    }
    
    totalprice *= days // On multiplie le prix par jour obtenu par le nombre de jours

    return totalprice;

}

function getPrice(){

    let dateDepart = new Date(champDepart.value);
    let dateRetour = new Date(champRetour.value);

    let days = differenceBetweenTwoDateInDays(dateDepart, dateRetour);

    let basePrice = selectedVoyage.price;

    let adultNumber = champAdultNumber.value;
    let childNumber = champChildNumber.value;

    let breakfast = champBreakfast.checked;

    return calculatePrice(days, basePrice, adultNumber, childNumber, breakfast);
}