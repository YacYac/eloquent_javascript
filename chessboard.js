function addLine(firstChar,secondChar) {
  console.log(firstChar+secondChar+firstChar+secondChar+firstChar+secondChar+firstChar+secondChar);
}

for (var i = 1; i <= 8; i++) {
  if (i % 2 === 1) {
    addLine(' ','#');
  } else {
    addLine('#',' ');
  }
}
