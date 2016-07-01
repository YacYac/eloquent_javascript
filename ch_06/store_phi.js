var map = {};
function storePhi(event, phi) {
  map[event] = phi;
}

storePhi("pizza",0.069);
storePhi("touched tree", -0.081);

Object.defineProperty(Object.prototype, "hiddenNonsense", {enumerable: false, value: "hi"});
for (var name in map) {
  console.log(name);
}
console.log(map.hiddenNonsense);
console.log(map.hasOwnProperty("toString"));
