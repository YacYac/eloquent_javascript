function reverseArray(array) {
  var newArray = [];

  for (var i = array.length; i > 0; i--) {
    newArray.push(i);
  }

  return newArray;
}

function reverseArrayInPlace(array) {
  var temp;
  for (var i = 0; i < array.length/2; i++) {
    temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  // reverse array without making a new array
  return array;
}

console.log(reverseArrayInPlace(reverseArray([1,2,3,4,5,6,7,8])));
