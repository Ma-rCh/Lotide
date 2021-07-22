
const assertEqual = function(actual, expected) {
  if (actual != expected){
   console.log(`Assertion Failed: ${actual} !== ${expected}`) 
  }
  else{
    
    console.log(`Assertion Passed: ${actual} === ${expected}`) 
  }
  };
  const assertArraysEqual = function(actual, expected) {
    console.log(eqArrays(actual, expected))
    };

  const eqObj = function(actual,expected){
    
   for (const i of Object.keys(actual)) {
   
   {
     if (actual[i] === expected [i]){}
     else
     {return false}
   }
   return true
  }
}
  //TEST
  console.log(eqObj({ a: '1', b: 2 } , { b: 2, a: '1' }))
