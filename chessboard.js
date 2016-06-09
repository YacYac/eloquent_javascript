function addLine(firstChar,secondChar,size) {
  var string = '';
  for (var i = 0; i < size; i++) {
    if (i % 2 === 0) {
      string += firstChar;
    } else {
      string += secondChar;
    }
  }
  console.log(string);
}

var size = 12;

for (var i = 0; i < size; i++) {
  if (i % 2 === 0) {
    addLine(' ','#',size);
  } else {
    addLine('#',' ',size);
  }
}
