var rabbit = {};
function speak(line) {
  console.log("The " + this.type + " rabbit says '" + line + "'");
};
var whiteRabbit = {type: "white", speak: speak};
var fatRabbit = {type: "fat", speak: speak};

whiteRabbit.speak("Oh my ears and whiskers, " +
                  "how late it's getting!");
fatRabbit.speak("I sure could use a carrot right now.")

speak.apply(fatRabbit, ["Burp!"]);
speak.call({type: "old"}, "Oh my.");

var protoRabbit = {
  speak: function (line) {
    console.log("The " + this.type + " rabbit says '" + line + "'");
  }
};
var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");

function Rabbit(type) {
  this.type = type;
}

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");
console.log(blackRabbit.type);

Rabbit.prototype.speak = function (line) {
  console.log("The " + this.type + " rabbit says '" + line + "'");
};
blackRabbit.speak("Doom...");
