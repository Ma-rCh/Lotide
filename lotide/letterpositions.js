const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (const iterator of sentence) {
    for (let i = 0; i <   sentence.length; i++) {
      const element = sentence[i];
      if (element == iterator){
    
    if (results[iterator]=== undefined){
      results[iterator] = [i]
    }
    else {results[iterator].push(i)}
  }
 }
}
  return results;
};

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
//test
assertArraysEqual(letterPositions("hello").e, [1])