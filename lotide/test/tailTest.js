//const assertEqual = require('../assertEqual');
const tail= require('../tail');
const assert = require('chai').assert;
describe("tail", () => {
  //const result = tail(["Hello", "Lighthouse", "Labs"])
  it("returns [Lighthouse, Labs] for [Hello, Lighthouse, Labs]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs'] );
  });
  
});
  // const result = tail(["Hello", "Lighthouse", "Labs"]);
  // assertEqual(result.length, 2); // ensure we get back two elements
  // assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
  // assertEqual(result[1], "Labs"); // ensure second element is "Labs"