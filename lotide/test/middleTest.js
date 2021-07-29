const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const assert = require('chai').assert;
//const assert = require('chai').assert;
describe("tail", () => {
  //const result = tail(["Hello", "Lighthouse", "Labs"])
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  
});
// console.log(middle([1]))
// assertArraysEqual(middle([1]),[]) // => []
// assertArraysEqual(middle([1, 2]) ,[])// => []
// assertArraysEqual(middle([1, 2, 3]) ,[2])// => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]) ,[3])// => [3]
// assertArraysEqual(middle([1, 2, 3, 4]) ,[2, 3])// => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]) ,[3, 4])// => [3, 4]
// //console.log(middle([1]))