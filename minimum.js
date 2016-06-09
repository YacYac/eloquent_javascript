function returnMinimum(a,b) {
  if (a === b) {
    return a;
  } else if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log(returnMinimum(15 - 5,6 + 7));
