import { User } from './models/User.js';

function main(){
    User.setMocksUser();
    var connexionButton = document.getElementById("submit");
    connexionButton.onclick = connexion;
}

function connexion() {
    let UserArray = User.getUsers();
    let reconnu = false;
    let valide = false;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    var user;

    UserArray.forEach(function(element){
        if (username === element.username) {
            reconnu = true;
            if (password === element.password){
                valide = true;
                user = element;
            }
        }
    });

    if(!reconnu){
        document.getElementById("info").textContent = "Identifiants inconnus";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        return;
    }

    if(!valide){
        document.getElementById("info").textContent = "Mauvais mot de passe";
        document.getElementById("password").value = "";
        return;
    }

    document.getElementById("info").textContent = "Vous êtes identifié";
    User.setLoggedUser(user);
    document.location.href="index.html";
        
}


window.onload = function () {
    main();
};