// ARRAY

// const chair = ["seat", "legs", "wood"];
const seat = ["round", "square", "oval"];
let legs = 4;
const material = "wood";
let occupied = true;
const legsDefinition = ""

// console.log(occupied); // This will print true, because 'occupied' is a block-scoped variable and can be reassigned.
//legs = 3;
// occupied = false;
// console.log(occupied); // This will print false, because 'occupied' is a block-scoped variable and can be reassigned.

const chair = [seat[1], legs, material, occupied];
console.log(chair); // This will print the array with its elements, because 'chair' is a constant variable and cannot be reassigned, but its elements can be modified. 

