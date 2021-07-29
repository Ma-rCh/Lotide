const assertEqual = function(actual, expected) {
if (actual != expected){
 console.log(`Assertion Failed: ${actual} !== ${expected}`) 
}
else{
  
  console.log(`Assertion Passed: ${actual} === ${expected}`) 
}
};
module.exports = assertEqual;
// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

//Assertion Failed: Lighthouse Labs !== Bootcamp