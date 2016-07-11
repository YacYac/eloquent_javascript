var plan = ["############################",
            "#      #    #      o      ##",
            "#                          #",
            "#          #####           #",
            "##         #   #    ##     #",
            "###           ##     #     #",
            "#           ###      #     #",
            "#   ####                   #",
            "#   ##       o             #",
            "# o  #         o       ### #",
            "#    #                     #",
            "############################"];

function Vector(x, y) {
  this.x = x;
  this.y = y;
}
Vector.prototype.plus = function (other) {
  return new Vector(this.x + other.x, this.y + other.y);
};

function Grid(width, height) {
  this.space = Array(width * height); //defines the length of the array
  this.width = width;
  this.height = height;
}
Grid.prototype.isInside = function (vector) {
  return  vector.x >= 0 && vector.x < this.width &&
          vector.y >= 0 && vecotr.y < this.height;
};
Grid.prototype.get = function (vector) {
  return this.space[vector.x + this.width * vector.y];
};
Grid.prototype.set = function (vector, value) {
  this.space[vector.x + this.width * vector.y] = value;
};

var grid = new Grid(5,5);
console.log(grid.get(new Vector(1, 1)));
grid.set(new Vector(1, 1), "X");
console.log(grid.get(new Vector(1, 1)));
