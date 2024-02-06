//flattening list

let arrays = [[1, 2, 3], [4, 5], [6]];

//Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
export function flattening(list) {
  //return a flattened array of all arrays via reduce
  let result = list.reduce(
    (previousValue, currentValue) =>
      //{
      // console.log("previous value: " + previousValue);
      // console.log("current value " + currentValue);
      //return combo of prev and curr
      //let combinedValue = previousValue.concat(currentValue);
      //console.log("combined value " + combinedValue);
      previousValue.concat(currentValue)
    //}
  );
  return result;
}

console.log(flattening(arrays));

//loop
//Write a higher-order function loop that provides something like a for loop statement.
// It takes a value, a test function, an update function, and a body function.
export function loop(value, test, update, body) {
  let curValue = value;
  //   for (let curValue = value; test(curValue); curValue = update(curValue)) {
  //     body(curValue);
  //   }
  while (test(curValue)) {
    console.log("iteration, curValue " + curValue);
    // if test is true do body
    console.log("calling body...");
    body(curValue);
    curValue = update(curValue);
  }
}
//Each iteration, it first runs the test function on the current loop value and
//stops if that returns false. Then it calls the body function, giving it the current value.
//Finally, it calls the update function to create a new value and starts from the beginning.
//}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
// → 3
// → 2
// → 1

//everyloop, everysome

// all values must return true when tested for function to return true
export function everyLoop(array, test) {
  let curResults = true;
  for (let item of array) {
    //console.log(test(item));
    curResults = curResults && test(item);
  }
  return curResults;
}

export function everySome(array, test) {
  return !array.some((value) => !test(value));
}

console.log("Should be true");
console.log(everySome([1, 3, 5], (n) => n < 10));
// → true
console.log("Should be false");
console.log(everySome([2, 4, 16], (n) => n < 10));
// → false
console.log("Should be true");
console.log(everySome([], (n) => n < 10));
// → true
