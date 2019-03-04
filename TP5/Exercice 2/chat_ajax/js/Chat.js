class Chat {
    constructor(saisie){
        this.saisie = saisie
    }

    static posterMessage(userId, message){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            console.log(this.readyState+" "+this.status);
        }
        xhttp.open("POST", "./ajax/chat.php", true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.send("method=poster&user_id="+userId+"&message="+message);
    }

    static recupereMessage(){
        return new Promise((resolve, reject) =>{
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4){
                    if (this.status == 200){
                        resolve(this.responseText);
                    } else {
                        reject("Impossible de fetch les messages");
                    }
                }
                
            }
            xhttp.open("POST", "./ajax/chat.php", true);
            xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhttp.send("method=recuperer");
        })
    }

}

export {Chat}