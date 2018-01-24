//back end

function changePlayer() {
  if (player == "X") {
    player = "O";
  }
  else if (player == "O") {
    player = "X";
  }
  $("#currentPlayer").text(player);
}

function resetGame() {
  $(".col-md-4").children().text("");
  player = "X";
  $("#currentPlayer").text(player);
  $("#winner").text("");
}


function winCheck() {

  if ($("#top-left").children()[0].innerText == player && $("#mid-left").children()[0].innerText == player && $("#bot-left").children()[0].innerText == player) {
    $("#winner").text("YOU WIN!!!!!!!");
  }

  else if ($("#top-center").children()[0].innerText == player && $("#mid-center").children()[0].innerText == player && $("#bot-center").children()[0].innerText == player) {
    $("#winner").text("YOU WIN!!!!!!!");
  }

  else if ($("#top-right").children()[0].innerText == player && $("#mid-right").children()[0].innerText == player && $("#bot-right").children()[0].innerText == player) {
    $("#winner").text("YOU WIN!!!!!!!");
  }

  else if ($("#top-left").children()[0].innerText == player && $("#top-center").children()[0].innerText == player && $("#top-right").children()[0].innerText == player) {
    $("#winner").text("YOU WIN!!!!!!!");
  }

  else if ($("#mid-left").children()[0].innerText == player && $("#mid-center").children()[0].innerText == player && $("#mid-right").children()[0].innerText == player) {
    $("#winner").text("YOU WIN!!!!!!!");
  }

  else if ($("#bot-left").children()[0].innerText == player && $("#bot-center").children()[0].innerText == player && $("#bot-right").children()[0].innerText == player) {
    $("#winner").text("YOU WIN!!!!!!!");
  }

  else if ($("#top-left").children()[0].innerText == player && $("#mid-center").children()[0].innerText == player && $("#bot-right").children()[0].innerText == player) {
    $("#winner").text("YOU WIN!!!!!!!");
  }

  else if ($("#top-right").children()[0].innerText == player && $("#mid-center").children()[0].innerText == player && $("#bot-left").children()[0].innerText == player) {
    $("#winner").text("YOU WIN!!!!!!!");
  }
}




//front end
$(document).ready(function(){

  player= "X";
  $("#currentPlayer").text(player);

  $(".changePlayer").click(function(){
    changePlayer();
  })

  $(".col-md-4").click(function(){

    if(player == "X" && $(this).children()[0].innerText == "O"){
      alert("try again");
    }
    else if (player == "O" && $(this).children()[0].innerText == "X") {
      alert("try again");
    }
    else if(player == "X" && $(this).children()[0].innerText == "X"){

    }
    else if (player == "O" && $(this).children()[0].innerText == "O") {

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
