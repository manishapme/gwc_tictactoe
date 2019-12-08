var currentPlayer = 1;
var gameOver = false;

function take_turn(clicked_id) {
  var current = document.getElementById(clicked_id).innerHTML;

  if (current == "O" || current == "X" || gameOver == true) {
     return;
  }

  if (currentPlayer == 1) {
    document.getElementById(clicked_id).innerHTML = "X";
    currentPlayer = 2;

  } else if (currentPlayer == 2) {
    document.getElementById(clicked_id).innerHTML = "O";
    currentPlayer = 1;
  }

  is_winner_row1(clicked_id);
  is_winner_row2(clicked_id);
  is_winner_row3(clicked_id);
  is_winner_col1(clicked_id);
  is_winner_col2(clicked_id);
  is_winner_col3(clicked_id);
  is_winner_diagnol1(clicked_id);
  is_winner_diagnol2(clicked_id);
}

function update_winner_div(letter, play) {
  var message = play + " is all " + letter + "'s. " + letter + " wins!";
  document.getElementById("winner").innerHTML = message;
  gameOver = true;
}

function is_winner_row1(clicked_id) {
  if (
    gameOver == false &&
    (clicked_id == "1" || clicked_id == "2" || clicked_id == "3") &&
    document.getElementById("1").innerHTML == document.getElementById("2").innerHTML &&
    document.getElementById("2").innerHTML == document.getElementById("3").innerHTML
  ) {
    update_winner_div(document.getElementById(clicked_id).innerHTML, "The top row");
  }
}

function is_winner_row2(clicked_id) {
  if (
    gameOver == false &&
    (clicked_id == "4" || clicked_id == "5" || clicked_id == "6") &&
    document.getElementById("4").innerHTML == document.getElementById("5").innerHTML &&
    document.getElementById("5").innerHTML == document.getElementById("6").innerHTML
  ) {
    update_winner_div(document.getElementById(clicked_id).innerHTML, "The middle row");
  }
}

function is_winner_row3(clicked_id) {
  if (
    gameOver == false &&
    (clicked_id == "7" || clicked_id == "8" || clicked_id == "9") &&
    document.getElementById("7").innerHTML == document.getElementById("8").innerHTML &&
    document.getElementById("8").innerHTML == document.getElementById("9").innerHTML
  ) {
    update_winner_div(document.getElementById(clicked_id).innerHTML, "The bottom row");
  }
}

function is_winner_col1(clicked_id) {
  if (
    gameOver == false &&
    (clicked_id == "1" || clicked_id == "4" || clicked_id == "7") &&
    document.getElementById("1").innerHTML == document.getElementById("4").innerHTML &&
    document.getElementById("4").innerHTML == document.getElementById("7").innerHTML
  ) {
    update_winner_div(document.getElementById(clicked_id).innerHTML, "The left column");
  }
}

function is_winner_col2(clicked_id) {
  if (
    gameOver == false &&
    (clicked_id == "2" || clicked_id == "5" || clicked_id == "8") &&
    document.getElementById("2").innerHTML == document.getElementById("5").innerHTML &&
    document.getElementById("5").innerHTML == document.getElementById("8").innerHTML
  ) {
    update_winner_div(document.getElementById(clicked_id).innerHTML, "The center column");
  }
}

function is_winner_col3(clicked_id) {
  if (
    gameOver == false &&
    (clicked_id == "3" || clicked_id == "6" || clicked_id == "9") &&
    document.getElementById("3").innerHTML == document.getElementById("6").innerHTML &&
    document.getElementById("6").innerHTML == document.getElementById("9").innerHTML
  ) {
    update_winner_div(document.getElementById(clicked_id).innerHTML, "The right column");
  }
}

function is_winner_diagnol1(clicked_id) {
  if (
    gameOver == false &&
    (clicked_id == "1" || clicked_id == "5" || clicked_id == "9") &&
    document.getElementById("1").innerHTML == document.getElementById("5").innerHTML &&
    document.getElementById("5").innerHTML == document.getElementById("9").innerHTML
  ) {
    update_winner_div(document.getElementById(clicked_id).innerHTML, "The diagnol");
  }
}

function is_winner_diagnol2(clicked_id) {
  if (
    gameOver == false &&
    (clicked_id == "3" || clicked_id == "5" || clicked_id == "7") &&
    document.getElementById("3").innerHTML == document.getElementById("5").innerHTML &&
    document.getElementById("5").innerHTML == document.getElementById("7").innerHTML
  ) {
    update_winner_div(document.getElementById(clicked_id).innerHTML, "The diagnol");
  }
}
