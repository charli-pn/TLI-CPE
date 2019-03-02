class User {

    constructor(username, password){
        this.userId = User.getNextId();
        this.username = username;
        this.password = password;
    }


    static getNextId(){
        var usersArray = User.getUsers();
        var maxId = -1;

        usersArray.forEach(element => {
            if(element.userId>maxId) maxId = element.userId;
        });
        
        return ++maxId;
    }


    static getUsers(){
        var usersLocalStorage = localStorage.getItem("usersArray")
        if(usersLocalStorage === null || usersLocalStorage==""){
            return []
        }
        return JSON.parse(usersLocalStorage);
    }

    static addUser(user){
        var usersArray = User.getUsers();
        usersArray.push(user);
        var usersAsString = JSON.stringify(usersArray);

        localStorage.setItem("usersArray", usersAsString);
    }

    //Ajout de quelques users au localStorage
    static setMocksUser(){

        var mockUserArray = [];

        mockUserArray.push(new User("test", "test"));
        mockUserArray.push(new User("toto", "tata"));
        mockUserArray.push(new User("foo", "bar"))

        localStorage.setItem("usersArray", JSON.stringify(mockUserArray));
 
    }

    static setLoggedUser(user){
        localStorage.setItem("loggedUser", JSON.stringify(user));
    }

    static getLoggedUser(){
        return JSON.parse(localStorage.getItem("loggedUser"));
    }

    

}

export {User}