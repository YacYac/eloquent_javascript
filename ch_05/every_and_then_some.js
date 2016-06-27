function every(array, test) {
  return array.reduce(function(prev,curr){
    return prev && test(curr);
  },true);
}

function some(array, test) {
  return array.reduce(function(prev,curr) {
    return prev || test(curr);
  },false);
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
