
// const assertEqual = function(actual, expected) {
//   if (actual != expected){
//    console.log(`Assertion Failed: ${actual} !== ${expected}`) 
//   }
//   else{
    
//     console.log(`Assertion Passed: ${actual} === ${expected}`) 
//   }
//   };
  const tail = function(arr){
    if (arr === [] || arr.length === 1){
      return [];
    }
    let arr2 = []
    for (i=1;i<arr.length;i++){
      arr2.push(arr[i]);
    }
    return arr2;
  }
  module.exports = tail;
  //TEST
  // const result = tail(["Hello", "Lighthouse", "Labs"]);
  // assertEqual(result.length, 2); // ensure we get back two elements
  // assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
  // assertEqual(result[1], "Labs"); // ensure second element is "Labs"
  