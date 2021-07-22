
const assertEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObj(actual, expected)){
   console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`) 
  }
  else{
    
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) 
  }
  };
  const assertArraysEqual = function(actual, expected) {
    console.log(eqArrays(actual, expected))
    };

  const eqObj = function(actual,expected){
    
   for (const i of Object.keys(actual)) {
   if ( actual[i].isArray || expected[i].isArray){
    return  eqArrays (actual[i],expected[i])
   } 
   else
   {
     if (actual[i] === expected[i]){}
     else
     {return false}
   }
   return true
  }
}
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
  //TEST
  //assertEqual({ a: '1', b: 2 } , { b: 2, a: '1' })
  const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual (cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual (cd, cd2); // => false
  console. log(cd);
  //const inspect = require('util').inspect;
  //console.log(`Example label: ${inspect(cd2)}`);