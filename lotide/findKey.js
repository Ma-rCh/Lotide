const assertEqual = function(actual, expected) {
  if (actual != expected){
   console.log(`Assertion Failed: ${actual} !== ${expected}`) 
  }
  else{
    
    console.log(`Assertion Passed: ${actual} === ${expected}`) 
  }
  };
  const findKey = function(obj,callback){
    const results = [];
      let key = undefined
        for (const iterator in obj) {
        if (callback(obj[iterator]))
        {key = iterator;
          return key;
        }
        
      }
      return key  
  }
  
  //test
  assertEqual(findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2),"noma") // => "noma"