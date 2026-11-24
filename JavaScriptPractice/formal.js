function getFullName(firstName, surname, useFormalName = false) {
    if (firstName === "" && surname === "") {
        return "";
    }

    let fullName = `${firstName} ${surname}`.trim();

    if (useFormalName && fullName !== "") {
        fullName = `Lord ${fullName}`;
    }

    return fullName;
}

let fullName1 = getFullName("Benjamin", "Hughes", true);
let fullName2 = getFullName("Maria", "Torres", false);

console.log(fullName1);
console.log(fullName2);