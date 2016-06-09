function countBs(string) {
  var numBs = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === 'B') {
      numBs += 1;
    }
  }

  return numBs;
}

function countLetters(stringToSearch,charToFind) {
  var charsFound = 0;
  for (var i = 0; i < stringToSearch.length; i++) {
    if (stringToSearch.charAt(i) === charToFind) {
      charsFound += 1;
    }
  }

  return charsFound;
}

console.log(countBs("The Berenstein Bears are Bringing It Home."));
console.log(countLetters("Help me help you","e"));
