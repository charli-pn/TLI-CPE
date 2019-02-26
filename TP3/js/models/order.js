class Order {

    constructor(orderId, userId, voyage, customer, dateDepart, dateRetour, adultNumber, childNumber, breakfast, request){

        this.orderId = orderId;
        this.userId = userId;
        this.voyage = voyage;
        this.customer = customer;
        this.dateDepart = dateDepart;
        this.dateRetour = dateRetour;
        this.adultNumber = adultNumber;
        this.childNumber = childNumber;
        this.breakfast = breakfast;
        this.request = request;

    }

    static getOrders(){
        var ordersCookie = getCookie("ordersArray")
        if(ordersCookie==""){
            return [];
        }
        return JSON.parse(ordersCookie);
    }

    static addOrder(order){
        var ordersArray = Order.getOrders();

        ordersArray.push(order);


        var ordersAsString = JSON.stringify(ordersArray);

        setCookie("ordersArray", ordersAsString);


    }

}

export {Order}