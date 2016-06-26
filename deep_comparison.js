function deepEqual(obj1,obj2) {
  var equals = true;
  for (var element1 in obj1) {
    if (obj1.hasOwnProperty(element1) && obj2.hasOwnProperty(element1)) {
      if (typeof obj1[element1] === 'object') {
        for (var element2 in obj1[element1]) {
          if (obj1[element1].hasOwnProperty(element2) && obj2[element1].hasOwnProperty(element2)) {
            if (obj1[element1][element2] !== obj2[element1][element2]) {
              equals = false;
            }
          } else {
            equals = false;
          }
        }
      } else {
        if (obj1[element1] !== obj2[element1]) {
          equals = false;
        }
      }
    } else {
      equals = false;
    }
  }
  return equals;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
