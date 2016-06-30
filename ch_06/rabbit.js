var rabbit = {};
function speak(line) {
  console.log("The " + this.type + " says '" + line + "'");
};
var whiteRabbit = {type: "white", speak: speak};
var fatRabbit = {type: "fat", speak: speak};

whiteRabbit.speak("Oh my ears and whiskers, " +
                  "how late it's getting!");
fatRabbit.speak("I sure could use a carrot right now.")
