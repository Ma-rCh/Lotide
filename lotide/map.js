const words = ["ground", "control", "to", "major", "tom"];
const map = function(arr, callback) {
  // empty for now :)
  const results = [];
  for (let iterator of arr) {
    results.push(callback(iterator));
  }
  return results;
}
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
//TEST
const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]);