
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
 const countLetters = function(str){
  let Ob = {};
  let oarr = Object.keys(Ob);
  //return oarr;
  for (const iterator of str) {
    //if () keyof exists
 if (iterator != ' '){
    if (Ob[iterator]=== undefined) {
      Ob[iterator]=1;
    } else {
      Ob[iterator] += 1;
    }
   }
  }
  return Ob;
 }
  //TEST
  console.log(countLetters("lighthouse in the house"))
  //console.log(countLetters("hello"))
//assertArraysEqual(words, ["hello", "world", "lighthouse"]);