let firstName = 'Bena';
let cityName = "Aalborg";

function introduce(firstName, cityName = 'Copenhagen') {
  return `Hello, ${firstName}, you are in ${cityName}`
}

console.log(introduce('Jessie', 'Malmo'))

function toThePower(number, power) {
    return Math.pow(number, power)
}