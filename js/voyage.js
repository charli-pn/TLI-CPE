class Voyage {

    constructor(id, title, description, img, price){

        this.id = id;
        this.title = title;
        this.description = description
        this.img = img
        this.price = price;

    }

}

function getVoyageArray() {

    let voyageArray = [];

    voyageArray.push(
        new Voyage(0, "La Renaissance",
        "Envie de renaitre ? Plongez à l'époque de la renaissance pour vous redecouvrir",
        "renaissance.jpg", 100));

    voyageArray.push(
        new Voyage(1, "La Pré-histoire", 
        "Vous n'aimez pas vraiment le luxe mais vous voulez de l'aventure ? La pré-histoire est faite pour vous !",
        "prehistoire.jpg", 200));

    voyageArray.push(
        new Voyage(2, "Le Futur", 
        "Vous en avez ras le bol de vos comtemporains ? Une cure termale dans le futur c'est la seule solution pour décompresser",
        "futur.jpg", 50));

    return voyageArray;
}


