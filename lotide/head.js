
const assertEqual = function(actual, expected) {
  if (actual != expected){
   console.log(`Assertion Failed: ${actual} !== ${expected}`) 
  }
  else{
    
    console.log(`Assertion Passed: ${actual} === ${expected}`) 
  }
  };
  const head = function(arr){
    if (arr === []){
      return undefined;
    }
    return arr[0]
  }
  //TEST
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);