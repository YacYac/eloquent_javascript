function reverseArray(array) {
  var newArray = [];
      
  for (var i = array.length; i > 0; i--) {
    newArray.push(i);
  }
  
  return newArray;
}

function reverseArrayInPlace(array) {
  // reverse array without making a new array
  return array;
}
    
console.log(reverseArray([1,2,3,4,5]));
