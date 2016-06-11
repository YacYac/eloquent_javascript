function range(start, end, step) {
  var array = [];
  if (!step) {
    step = 1;
  }
  if (step > 0) {
    for (var i = start; i <= end; i += step) {
      array.push(i);
    }
  } else {
    for (var i = start; i >= end; i += step) {
      array.push(i);
    }
  }
  return array;
}

function sum(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

var start = 5,
    end = 2,
    step = -1;

console.log(range(start,end,step));
console.log(sum(range(start,end,step)));
