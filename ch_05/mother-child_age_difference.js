var fs = require('fs');

fs.readFile('ancestry.js',function(err,data) {
  function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
  }

  var ancestry = JSON.parse(data);
  var byName = {};

  ancestry.forEach(function(person) {
    byName[person.name] = person;
  });

  var ageDifferences = ancestry.filter(function(person){
    return person.mother !== null && byName.hasOwnProperty(person.mother);
  }).map(function(person) {
    return person.born - byName[person.mother].born;
  });

  console.log(average(ageDifferences));
});

//

// Your code here.
// → 31.2
