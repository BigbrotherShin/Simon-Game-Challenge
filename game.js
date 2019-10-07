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

/*
document.querySelector("body").addEventListener("keydown", keydownFunction);
document.querySelector("body").addEventListener("click", keydownFunction);

function keydownFunction(event) {
  onKeyActivate();
  window.removeEventListener("keydown", keydownFunction, false);
}
window.addEventListener("keydown", keydownFunction, false);
*/

// ----------------

reset();

function reset() {
  $("body").click(function() {
    onKeyActivate();
    $("body").unbind();
  });

  $("body").keydown(function() {
    onKeyActivate();
    $("body").unbind();
  });
}

/*/ ------------------------------

var callback = function(event) {
  onKeyActivate();
  window.removeEventListener("click", keydownFunction, false);
};

function insideAdd() {
  window.addEventListener("click", keydownFunction, false);
}

$("body").keydown(function() {
  if (event.which == 13) callback();
  insideAdd();
});

$("body").click(callback);
// -------------------------------------- */

var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level = 1;

//button blink and play sound...

function onKeyActivate() {
  $("#level-title").text('"' + "level-" + level + '"');
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  setTimeout(function() {
    decoration(randomChosenColour);
  }, 1100);

  console.log(gamePattern);
}

//Process of game...

$(".btn").click(onButtonClick);

var userAnswer = [];

function onButtonClick() {
  if (gamePattern.length >= 1) {
    var userClickButton = this.id;

    decoration(userClickButton);

    userAnswer.push(userClickButton);

    if (gamePattern.length == userAnswer.length) {
      if (JSON.stringify(gamePattern) == JSON.stringify(userAnswer)) {
        ++level;
        onKeyActivate();
        userAnswer.length = 0;
      } else {
        gameOver();
        realReStart();
      }
    } else if (
      JSON.stringify(gamePattern.slice(0, userAnswer.length)) ==
      JSON.stringify(userAnswer)
    ) {
    } else {
      gameOver();
      realReStart();
      console.log(userAnswer);
    }
  }
}

// Game over function...
function gameOver() {
  makeSound("wrong");
  $("#level-title").text("Game Over !");
  $("body").addClass("game-over");
}

function realReStart() {
  setTimeout(function() {
    reStart();
  }, 1000);
}

function reStart() {
  $("p").text("Press Any Key to Restart");
  $("body").click(function() {
    window.location = window.location.pathname;
    $("body").unbind();
  });
  $("body").keydown(function() {
    window.location = window.location.pathname;
    $("body").unbind();
  });
}
// Blink and sound function...

function decoration(chosenColour) {
  $("#" + chosenColour)
    .fadeTo(300, 0.1)
    .fadeTo(300, 1);

  makeSound(chosenColour);
}

function makeSound(nameOfSound) {
  var soundName = "sounds/" + nameOfSound + ".mp3";
  var audio = new Audio(soundName);
  audio.play();
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
