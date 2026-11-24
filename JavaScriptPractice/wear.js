function getClothesToWear(temperature) {
    if (temperature >= 18) {
        return "shorts and a t-shirt";
    } else {
        return "long pants and a jacket";
    }
}

const clothesToWear = getClothesToWear(18);
console.log(clothesToWear);