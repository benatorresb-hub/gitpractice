const drink = "Flat white";
const price = 42;
const quantity = 3;
let stampCard = 2;


// let total price

function getTotalPrice(quantity, price, isTakeaway) {
    const cupFee = 3; // per cup, takeaway only
    let totalPrice = quantity * price;
    let orderSummary = "";

    if(isTakeaway) {
        totalPrice = (price + cupFee) * quantity;
    } else {
        totalPrice = price * quantity;
    }

    if ((stampCard + quantity) %10) {
        totalPrice - price
        orderSummary
    }

    // Total: 135 kr
    orderSummary = `New order: ${quantity} x Flat white (takeway) \n Total: ${totalPrice} kr`   
    return orderSummary;
}


// let totalPrice = ?

// New order: 3 × Flat white (takeaway)
// Total: 135 kr
console.log(getTotalPrice(4, 25, true))
console.log(getTotalPrice(10, 1000, true))
console.log(getTotalPrice(quantity, price, true))