const global = "global";
function scopeTest() {
  console.log(global);
  const functionScope = "functionScope";

  function tester() {
    console.log(global);
    const testerVariable = "testerVariable";
  }

  tester();
  console.log(testerVariable);
}

scopeTest();