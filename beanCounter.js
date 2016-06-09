function countBs(string) {
  var numBs = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === 'B') {
      numBs += 1;
    }
  }

  return numBs;
}

console.log(countBs("The Berenstein Bears are Bringing It Home."));
