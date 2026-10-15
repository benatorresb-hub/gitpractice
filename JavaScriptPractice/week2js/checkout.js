
let price = 1000;

function getVat(price) {
    return price * 0.25
}

function getPriceWithVat(price) {
    return price + getVat(price)
}

function getShippingCost(price) {
    return getPriceWithVat(price) >= 500 
}

function getFinalPrice(price)