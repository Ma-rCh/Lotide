const middle = function(arr1) {
  let arr = [];
  if (arr1.length < 3) {
    //console.log(arr);
    return arr;}
  if (arr1.length % 2 !== 0) {
    let j = Math. floor(arr1.length / 2);
    arr.push(arr1[j])
  
    //console.log(arr);
    return arr;
  } else {
    let j = arr1.length / 2;
    let i = j - 1;
    arr.push(arr1[i]);
    arr.push(arr1[j]);
    //console.log(arr);
   
    return arr;
  }
};
module.exports = middle;
//console.log(middle([1]))