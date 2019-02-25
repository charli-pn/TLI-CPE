class User {
    constructor(id, username, password){
        this.id = id;
        this.username = username;
        this.password = password;
    }
}

function getUserArray() {
    let UserArray = [];

    UserArray.push(
        new User(0, "anon", "pwd")
    );

    UserArray.push(
        new User(1, "master", "pwd")
    );

    UserArray.push(
        new User(2, "kilian", "relou")
    );

    return UserArray;
}

function connexion() {
    let UserArray = getUserArray();
    let reconnu = false;
    let valide = false;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    UserArray.forEach(function(element){
        if (username === element.username) {
            reconnu = true;
            if (password === element.password){
                valide = true;
            }
        }
    });

    if (reconnu === true){
        if (valide === true) {
            document.getElementById("info").innerHTML = "<p>Vous êtes identifié</p><br>";
        } else {
            document.getElementById("info").innerHTML = "<p>Mauvais mot de passe</p><br>";
            document.getElementById("password").value = "";
        }
    } else {
        document.getElementById("info").innerHTML = "<p>Identifiants inconnus</p><br>";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
}

window.onload = function () {
};