
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

  const without = function(act,rem){
    let arr3 =  act;
    for (let i=0; i< act.length; i++) {
      for (let j=0; j< rem.length; j++) {
        if (act[i]===rem[j]){ 
          arr3. splice(i,1);
        break;
      }
        //else{arr3.push(iterator); break;}
          
        }
      }
      return arr3;
    }

  
  //TEST
  console. log (without([1, 2, 3], [1])) // => [2, 3]
  console.log (without(["1", "2", "3"], [1, 2, "3"]) )// => ["1", "2"]
  const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);