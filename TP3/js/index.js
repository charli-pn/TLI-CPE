window.onload = function () {
    main();
};

function main(){
    const voyageArray = getVoyageArray();

    const destinationsCards = document.getElementById("destinations-cards");

    let voyagesCardHTML = "";

    for (let i=0; i<voyageArray.length; i++){

    
        voyagesCardHTML += generateVoyageCardHTML(voyageArray[i]);
    }
    destinationsCards.innerHTML =voyagesCardHTML;
}

function generateVoyageCardHTML(voyage){

    console.log(voyage);

    let cardHtml = "<div class=\"card\">"
    cardHtml+= "<div class=\"card-image\">"
    cardHtml+= "<img src=\"img/"+voyage.img+"\">"
    cardHtml+= "</div>"
    cardHtml+= "<div class=\"card-content\">"
    cardHtml+= "<h3>"+voyage.title+"</h3>"
    cardHtml+= "<p>"+voyage.description+"</p>"
    cardHtml+= "<p>Prix : "+voyage.price+"</p>"
    cardHtml+= "<p>Petit-déjeuner: "+(voyage.breakfastIncluded ? "Oui" : "Non")+"</p>"
    cardHtml+= "<p>Enfants acceptés : "+(voyage.acceptChildren ? "Oui" : "Non")+"</p>"
    cardHtml+= "</div>"
    cardHtml+= "<div class=\"card-action\">"
    cardHtml+= "<a href=\"reservation.html?voyageId="+voyage.id+"\">Réserver</a>"
    cardHtml+= "</div>"
    cardHtml+= "</div>"

    return cardHtml;
}

