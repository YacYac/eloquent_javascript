var arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
console.log(arrays.reduce(function (prev, curr) {
    return prev.concat(curr);
  })
);
// → [1, 2, 3, 4, 5, 6]
