function isEven(number) {
  if (number < 0) {
    return isEven(number * -1);
  }
  if (number === 0) {
    return true;
  }
  if (number === 1) {
    return false;
  }
  return isEven(number - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
