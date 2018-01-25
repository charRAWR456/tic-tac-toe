//back end
function changePlayer() {
  if (player == "J") {
    player = "M";
  }
  else if (player == "M") {
    player = "J";
  }
  $("#currentPlayer").text(player);
}

function resetGame() {
  $(".col-xs-4").children().text("");
  player = "J";
  $("#currentPlayer").text(player);
  $("#winner").hide();
}

function winCheck() {

  if (($("#top-left").children()[0].innerText == player && $("#mid-left").children()[0].innerText == player && $("#bot-left").children()[0].innerText == player)
  ||
  $("#top-center").children()[0].innerText == player && $("#mid-center").children()[0].innerText == player && $("#bot-center").children()[0].innerText == player
  ||
  $("#top-right").children()[0].innerText == player && $("#mid-right").children()[0].innerText == player && $("#bot-right").children()[0].innerText == player
  ||
  $("#top-left").children()[0].innerText == player && $("#top-center").children()[0].innerText == player && $("#top-right").children()[0].innerText == player
  ||
  $("#mid-left").children()[0].innerText == player && $("#mid-center").children()[0].innerText == player && $("#mid-right").children()[0].innerText == player
  ||
  $("#bot-left").children()[0].innerText == player && $("#bot-center").children()[0].innerText == player && $("#bot-right").children()[0].innerText == player
  ||
  $("#top-left").children()[0].innerText == player && $("#mid-center").children()[0].innerText == player && $("#bot-right").children()[0].innerText == player
  ||
  $("#top-right").children()[0].innerText == player && $("#mid-center").children()[0].innerText == player && $("#bot-left").children()[0].innerText == player
  ) {
    $("#winner").show().text("YOU WIN!!!!");
  }
}


//front end
$(document).ready(function(){

  player= "J";
  $("#currentPlayer").text(player);

  $(".changePlayer").click(function(){
    changePlayer();
  })

  $(".col-xs-4").click(function(){

    if ($("#winner").is(":visible")) {
      alert("This game has been won, please reset game to play again!");
    }

    else if ((player == "J" && $(this).children()[0].innerText == "M")
    ||
    (player == "M" && $(this).children()[0].innerText == "J")
    ||
    (player == "J" && $(this).children()[0].innerText == "J")
    ||
    (player == "M" && $(this).children()[0].innerText == "M"))
    {

    }

    else {
      $(this).children().text(player);
      winCheck();
      changePlayer();
    }
  })

  $(".resetGame").click(function(){
    resetGame();
  })
})
