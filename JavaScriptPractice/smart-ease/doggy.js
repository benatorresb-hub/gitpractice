const dogYearOfBirth = 2020;
const dogYearFuture = 2027;
const shouldShowResultInDogYears = true;

const dogYear = dogYearFuture - dogYearOfBirth;

const dogAge = dogYear * 7;
const humanAge = dogYear;

console.log('Your dog will be ' + dogAge + ' dog years old in ' + dogYearFuture);