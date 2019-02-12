
function differenceBetweenTwoDateInDays(date1, date2){
    let timeDiff = Math.abs(date2.getTime() - date1.getTime());
    let difference = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return difference;
}