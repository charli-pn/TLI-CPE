class Order {

    static nextId = 0;

    constructor(orderId, userId, voyage, customer, dateDepart, dateRetour, adultNumber, childrebNumber, breakfast, request){

        this.orderId = orderId;
        this.userId = userId;
        this.voyage = voyage;
        this.customer = customer;
        this.dateDepart = dateDepart;
        this.dateRetour = dateRetour;
        this.adultNumber = adultsNumber;
        this.childrebNumber = childrebNumber;
        this.breakfast = breakfast;
        this.request = request;
        Order.nextId++;
    }



}

export {Order}