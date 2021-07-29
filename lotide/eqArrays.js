
const assertEqual = function(actual, expected) {
  if (actual != expected){
   console.log(`Assertion Failed: ${actual} !== ${expected}`) 
  }
  else{
    
    console.log(`Assertion Passed: ${actual} === ${expected}`) 
  }
  };
  const eqArrays = function(actual,expected){
    if (actual.length != expected.length){
      return false;
    }
   for (let i = 0;i< actual.length ; i++){
     if (actual[i] === expected [i]){}
     else
     {return false}
   }
   return true
  }
  module.exports = eqArrays;
  //TEST
  // assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
  // assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]) )