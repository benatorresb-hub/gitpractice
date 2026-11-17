let message = "";


let visitors = 0;
function openShop() {
  visitors = visitors + 1;
  message = "Welcome, visitor " + visitors;
  console.log(message);
}
function closeShop() {
    let goodbye = "";
  if (visitors > 0) {
    goodbye = "Bye, " + visitors + " visitors!";
  }
  console.log(goodbye);
}
openShop();
openShop();
console.log(message);
closeShop();