var fs = require('fs');

fs.readFile('ancestry.js',function(err,data) {
  var ancestry = JSON.parse(data);

  function average(array) {
    function plus(a, b) { return a + b; }
    return Math.round(array.reduce(plus) / array.length * 10) / 10 ;
  }

  var deathAndAge = ancestry.map(function (person) {
    return { died: person.died, age: person.died - person.born };
  });

  var centuries = deathAndAge.map(function(person) {
    return Math.ceil(person.died/100);
  }).filter(function(val,index,arr) {
    return index <= arr.indexOf(val);
  }).sort(function(a,b) {
    return a - b;
  });

  var averageCenturies = centuries.map(function(century) {
    return {century: century,
            averageAge: average(deathAndAge.filter(function(person) {
              return century === Math.ceil(person.died/100);
            }).map(function (person) {
              return person.age;
            }))
          };
  });

  console.log(averageCenturies);
});
