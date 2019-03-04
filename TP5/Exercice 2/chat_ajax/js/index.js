import {Chat} from './Chat.js'

const textInput = document.getElementById("saisie");
const sendButton = document.getElementById("send");
const chatContent = document.getElementById("chat");

window.onload = function () {
    main();
};

function main(){
    document.addEventListener('keydown', (event) => {
        var nomTouche = event.key

        if(nomTouche != "Enter" || event.shiftKey){
            return;
        }

        postMessage();
    });

    sendButton.addEventListener("click", postMessage);
    window.setInterval(updateChat, 500);
    
    console.log("Fin index.js");

}

function postMessage(){
    var url = new URL(window.location.href);
    var user = url.searchParams.get("user");
    Chat.posterMessage(user, textInput.value);
    textInput.value = ""
}

function updateChat(){
    Chat.recupereMessage()
    .then((response)=>{
        chatContent.innerHTML=response;
    })
    .catch(console.log)
}