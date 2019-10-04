// var randomChosenColour = buttonColours[randomNumber];
// $("#" + randomChosenColour)
//   .fadeTo(300, 0.1)
//   .fadeTo(300, 1);

// var soundName = randomChosenColour + ".mp3";
// var audio = new Audio(soundName);
// audio.play();

// var buttonColours = ["red", "blue", "green", "yellow"];
// var randomNumber = Math.floor(Math.random() * 4);

// function nextSequence() {
//   var randomNumber = Math.floor(Math.random() * 4);
// }

// proceed of the game
document.querySelector("body").addEventListener("keydown", onKeyActivate);

var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 1;

//button blink and play sound...

function onKeyActivate() {
  $("#level-title").text('"' + "level-" + level + '"');
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour)
    .fadeTo(300, 0.1)
    .fadeTo(300, 1);

  makeSound();

  function makeSound() {
    var soundName = "sounds/" + randomChosenColour + ".mp3";
    var audio = new Audio(soundName);
    audio.play();
  }
  console.log(gamePattern);
}

//button blink and play sound...

$(".btn").click(onButtonClick);

var userAnswer = [];

function onButtonClick() {
  var userClickButton = this.id;
  userAnswer.push(userClickButton);

  if (gamePattern.length == userAnswer.length) {
    if (JSON.stringify(gamePattern) == JSON.stringify(userAnswer)) {
      ++level;
      onKeyActivate();
      userAnswer.length = 0;
    } else {
      $("#level-title").text("Game Over !");
      $("body").addClass("game-over");
    }
  } else if (
    JSON.stringify(gamePattern.slice(0, userAnswer.length)) ==
    JSON.stringify(userAnswer)
  ) {
  } else {
    $("#level-title").text("Game Over !");
    $("body").addClass("game-over");
    console.log(userAnswer);
  }
}

// if (gamePattern. != userAnswer) {
//   onKeyActivate();
//   userAnswer.length = 0;
// } else {
//   alert("Game over");
// }

/*

if (JSON.stringify(gamePattern) == JSON.stringify(userAnswer)) {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  //button blink and play sound...

  gamePattern.push(randomChosenColour);

  userAnswer.length = 0;
  console.log(userAnswer);
} else {
  alert("Game Over");
}

*/

// var nextButtonId = "#" + randomChosenColour;

// document.querySelector(nextButtonId).addEventListener("click", onButtonClick);

// First image on the page

// Button blink and play sound

/*

document.querySelector("body").addEventListener("keydown", onKeyActivate);

function onKeyActivate() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  $("#" + randomChosenColour)
    .fadeTo(300, 0.1)
    .fadeTo(300, 1);

  makeSound();

  function makeSound() {
    var soundName = "sounds/" + randomChosenColour + ".mp3";
    var audio = new Audio(soundName);
    audio.play();
  }
}

*/