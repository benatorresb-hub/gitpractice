const shoppingList = ["Milk", "Bread", "Eggs", "Apples", "Cheese"];

for (let i = 0; i < shoppingList.length; i++) {
    console.log((i + 1) + ". " + shoppingList[i]);

    if (shoppingList[i] === "Eggs") {
        console.log("Don't forget the eggs!");
    }
}

console.log("Total items: " + shoppingList.length);