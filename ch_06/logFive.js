function logFive(array) {
  var logTimes = Math.min(5, array.length);
  for (var i = 0; i < logTimes; i++) {
    console.log(array.element);
  }
}

function ArraySeq(sequence) {
  this.sequence = sequence;
  this.counter = 0;
}
Object.defineProperty(ArraySeq.prototype, "length", {
  get: function () {
    return this.sequence.length;
  }
});
Object.defineProperty(ArraySeq.prototype, "element", {
  get: function() {
    this.counter += 1;
    return this.sequence[this.counter - 1];
  }
});

function RangeSeq(min, max) {
  this.sequence = this.makeRange(min,max);
  this.counter = 0;
}
RangeSeq.prototype.makeRange = function (min,max) {
  var sequence = [];
  for (var i = min; i < max; i++) {
    sequence.push(i);
  }
  return sequence;
};
Object.defineProperty(RangeSeq.prototype, "length", {
  get: function () {
    return this.sequence.length;
  }
});
Object.defineProperty(RangeSeq.prototype, "element", {
  get: function() {
    this.counter += 1;
    return this.sequence[this.counter - 1];
  }
});


logFive(new ArraySeq([1,2]));
logFive(new RangeSeq(100, 1000));
