// function runFiveMiles() {
//   console.log("Go for a five-mile run");
// }

// function liftWeights() {
//   console.log("Pump iron");
// }

// function swimFortyLaps() {
//   console.log("Swim 40 laps");
// }

// function exerciseRoutine(postRunActivity) {
//   runFiveMiles();
//   postRunActivity();
// }

// function Monday() {
//   exerciseRoutine(liftWeights);
// }

// Monday();

const receivesAFunction = (chaiOrder, name) => {
  return chaiOrder() + " " + name;
};

const returnsANamedFunction = () => {
  return receivesAFunction;
};

const returnsAnAnonymousFunction = () => {
  return () => {};
};

/*
The receivesAFunction function should:
take a callback function as an argument
call the callback function
it doesn't matter what this function returns, 
so long as it calls the callback function

The returnsANamedFunction function should:
take no arguments
return a named function

The returnsAnAnonymousFunction function should:
take no arguments
return an anonymous function
*/
