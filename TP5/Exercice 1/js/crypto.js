'use strict'
const selectCrypto = document.getElementById('crypto-select');
const name = document.getElementById('name');
const symbole = document.getElementById('symbole');
const cours = document.getElementById('cours');

window.onload = function () {
    main();
};

function main(){

    var promise = fetchCrypto()
    promise.then(loadCrypto)

    promise.then(data => {
        selectCrypto.addEventListener("change", () => updateSelectedCrypto(data))
    })

    promise.catch(console.log);
}

function fetchCrypto(){
    return new Promise((resolve, reject) =>{
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4){
                if (this.status == 200){
                    resolve(JSON.parse(this.responseText).data);
                } else {
                    reject("Impossible de fetch les cryptomonaies");
                }
            }
        }
        xhttp.open("GET", "./cryptomonnaies/cryptomonnaies.json", true);
        xhttp.send();
    })
}

function loadCrypto(data){
    data.sort((a, b) => {
        return (a.name < b.name) ? -1 : 1;
    })

    data.forEach(crypto => {
        addCryptoToSelect(crypto)
    });

    return data;
}

function addCryptoToSelect(crypto){
    selectCrypto.innerHTML += "<option value=\""+crypto.id+"\">"+crypto.name+"</option>"
}

function updateSelectedCrypto(data){

    var selectedId = selectCrypto.value;

    if(selectedId==""){
        name.innerHTML = ""
        symbole.innerHTML = ""
        cours.innerHTML = ""
        return;
    }

    var selectedCrypto = data.find((element)=>element.id == selectedId);

    name.innerHTML = selectedCrypto.name
    symbole.innerHTML = selectedCrypto.symbol
    cours.innerHTML = selectedCrypto.quote.EUR.price
}