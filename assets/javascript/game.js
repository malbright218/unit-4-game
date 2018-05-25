//GLOBAL VARIABLES
var wins = 0;
var losses = 0;
//========================================================
var game = function() {

var counter = 0;
var targetNumber = 88;
//======================================================== 
$("#number-to-guess").text(targetNumber);   //inserting my target number into the assigned ID

var crystals = $("#crystals");

var numberOptions = [12, 7, 19, 26, 3];

  for (var i = 0; i < numberOptions.length; i++) {
    
    var imageCrystal = $("<img>");  
    
      imageCrystal.addClass("crystal-image");
      imageCrystal.attr("src", "assets/images/crystal" + numberOptions[i] + ".jpg");
      imageCrystal.attr("data-crystalvalue", numberOptions[i]);
      crystals.append(imageCrystal);
  }

crystals.on("click", ".crystal-image", function() {

  var crystalValue = ($(this).attr("data-crystalvalue"));
      crystalValue = parseInt(crystalValue);
      counter += crystalValue;
      
      $("#score").text("SCORE: " + counter);

    if (counter === targetNumber) {
      $("#status").text("I can't believe you won.");
      $("#timer").text("Reload to start a new game")
      wins++;
      console.log(wins);
    }

    else if (counter >= targetNumber) {
        $("#status").text("Wow. You suck.");
        $("#timer").text("CLICK TO START A NEW GAME")
        losses++;
        console.log(losses);
    }

    $("#timer").on("click", function() {
      counter = 0;
      $("#timer").empty();    //resetting the message
      $("#score").empty();    //resetting the message
      $("#status").empty();   //resetting the message
      $("#crystals").empty(); //clearing the image row
      
      
      game(); //starting the game over again
    });

  });

}


  

  game();