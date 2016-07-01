var map = {};
function storePhi(event, phi) {
  map[event] = phi;
}

storePhi("pizza",0.069);
storePhi("touched tree", -0.081);

Object.prototype.nonsense = "hi";
for (var name in map) {
  console.log(name);
}
console.log("nonsense" in map);
console.log("toString" in map);
