const assertEqual = function(actual, expected) {
  if (actual != expected){
   console.log(`Assertion Failed: ${actual} !== ${expected}`) 
  }
  else{
    
    console.log(`Assertion Passed: ${actual} === ${expected}`) 
  }
  };
  const countOnly = function(arr,Ob){
    let Ob1  = {};
    let oarr = Object.keys(Ob);
    //return oarr;
    for (const iterator of arr) {
      if (Ob[iterator]){
        Ob1[iterator] = (Ob1[iterator] || 0) + 1; 
    
    }
  }
    return Ob1;
   }
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  
  assertEqual(result1["Jason"], 1);
  assertEqual(result1["Karima"], undefined);
  assertEqual(result1["Fang"], 2);
  assertEqual(result1["Agouhanna"], undefined);