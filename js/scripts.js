//back end




//front end
$(document).ready(function(){


  var player1 = "x"
  var player2 = "o"
  var player = player1;

  $(".changePlayer").click(function(){
    if (player == player1) {
      player = player2;
    }
    else if (player == player2) {
      player = player1;
    }
  })


  $(".col-md-4").click(function(){


    if(player == player1 && $(this).children()[0].innerText == player2){
      alert("try again");
    }

    else if (player == player2 && $(this).children()[0].innerText == player1) {
      alert("try again");
    }

    else {
      $(this).children().text(player);
     

    }

    })

})
