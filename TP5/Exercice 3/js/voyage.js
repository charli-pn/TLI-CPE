class Voyage {

    constructor(id, title, description, img, price, breakfastIncluded, acceptChildren, lieu){

        this.id = id;
        this.title = title;
        this.description = description;
        this.img = img;
        this.price = price;
        this.breakfastIncluded = breakfastIncluded;
        this.acceptChildren = acceptChildren;
        this.lieu = lieu;
    }

    static getVoyageArray() {

        let voyageArray = [];
    
        voyageArray.push(
            new Voyage(0, "La Renaissance",
            "Envie de renaitre ? Plongez à l'époque de la renaissance pour vous redecouvrir",
            "renaissance.jpg", 100, true, true, 2969679));
    
        voyageArray.push(
            new Voyage(1, "La Pré-histoire", 
            "Vous n'aimez pas vraiment le luxe mais vous voulez de l'aventure ? La pré-histoire est faite pour vous !",
            "prehistoire.jpg", 200, false, false, 6077243));
    
        voyageArray.push(
            new Voyage(2, "Le Futur", 
            "Vous en avez ras le bol de vos comtemporains ? Une cure termale dans le futur c'est la seule solution pour décompresser",
            "futur.jpg", 50, true, true, 292223));
    
        voyageArray.push(
            new Voyage(3, "Le Moyen-âge", 
            "Vous en avez assez d'être trop vieux ou trop jeune ? Rejoignez le moyen âge !",
            "moyenage.jpg", 75, true, false, 2950159));
    
        return voyageArray;

    }

    getTotalPrice(days, adultNumber, childNumber, breakfast){

        var basePrice = this.price;

        var totalprice = 0;

        days = parseInt(days);
        basePrice = parseFloat(basePrice);
        adultNumber = parseInt(adultNumber);
        childNumber = parseInt(childNumber);
        console.log(adultNumber);
    
        totalprice = basePrice*adultNumber // On ajoute le prix par jour des adultes
        totalprice += basePrice*childNumber*0.4 // On ajoute le prix par jour des enfants
        
        

        if(breakfast){
            totalprice += 8 * (childNumber+adultNumber) //Petit déjeuné
        }
        
        totalprice *= days // On multiplie le prix par jour obtenu par le nombre de jours
    
        return totalprice;
    }

    getTemperature(lieu, id){
        $.ajax({
            type: 'POST',
            url: "http://api.openweathermap.org/data/2.5/weather?id="+lieu+"&APPID=9416a0827f72fa3fcaaf3d4f07c2b367",
            dataType: 'JSON',
            error: function(xhr,status,error){
                let temperatureDom = document.getElementById(id);
                console.log(error);
                temperatureDom.innerHTML = "N/A";
            },
            success: function(result,status,xhr){
                let temperatureDom = document.getElementById(id);
                temperatureDom.innerHTML = Number.parseFloat(result.main.temp - 273.15).toPrecision(4);
            }
        });
    }

}

export {Voyage}


