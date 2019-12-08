var origBoard;
var currentPlayer = 1;

function take_turn(clicked_id) {
  var current = document.getElementById(clicked_id).innerHTML;

  if (current == "O" || current == "X") {
     return;
  }

  if (currentPlayer == 1) {
    document.getElementById(clicked_id).innerHTML = "X";
    currentPlayer = 2;

  } else if (currentPlayer == 2) {
    document.getElementById(clicked_id).innerHTML = "O";
    currentPlayer = 1;
  }
}

function checkIfXWonTopRow() {
  var curtopleft = document.getElementById("topleft").innerHTML;
  var curtopmid = document.getElementById("topmid").innerHTML;
  var curtopright = document.getElementById("topright").innerHTML;
  if (curtopleft == curtopmid && curtopmid == curtopright) {
    var print = "Player X won!"; 
     document.getElementById("player x won").innerHTML = print;
  }
}    
  
function checkIfXWonMidRow() {
  var curmidleft = document.getElementById("midleft").innerHTML;
  var curmiddle = document.getElementById("middle").innerHTML;
  var curmidright = document.getElementById("midright").innerHTML;
  if (curmidleft == curmiddle && curmiddle == curmidright) {
    var print = "Player X won!"; 
     document.getElementById("player x won").innerHTML = print;
  }
}
  
function checkIfXWonBotRow() {
  var curbotleft = document.getElementById("botleft").innerHTML;
  var curbotmid = document.getElementById("botmid").innerHTML;
  var curbotright = document.getElementById("botright").innerHTML;
  if (curbotleft == curbotmid && curbotmid == curbotright) {
    var print = "Player X won!"; 
     document.getElementById("player x won").innerHTML = print;
  }
}

function checkIfXWonDiag1() { 
  var curtopleft = document.getElementById("topleft").innerHTML;
  var curmiddle = document.getElementById("middle").innerHTML;
  var curbotright = document.getElementById("botright").innerHTML;
  if (curtopleft == curmiddle && curmiddle == curbotright) {
    var print = "Player X won!"; 
     document.getElementById("player x won").innerHTML = print;
  }
}
  
function checkIfXWonDiag2() {    
  var curtopright = document.getElementById("topright").innerHTML;
  var curmiddle = document.getElementById("middle").innerHTML;
  var curbotleft = document.getElementById("botleft").innerHTML;
  if (curtopright == curmiddle && curmiddle == curbotleft) {
    var print = "Player X won!"; 
     document.getElementById("player x won").innerHTML = print;
  }
}
  
function checkIfXWonLeftCol() {
  var curtopleft = document.getElementById("topleft").innerHTML;
  var curmidleft = document.getElementById("midleft").innerHTML;
  var curbotleft = document.getElementById("botleft").innerHTML;
  if (curtopleft == curmidleft && curmidleft == curbotleft) {
    var print = "Player X won!"; 
     document.getElementById("player x won").innerHTML = print;
  }
} 
  
function checkIfXWonMidCol() {
  var curtopmid = document.getElementById("topmid").innerHTML;
  var curmiddle = document.getElementById("middle").innerHTML;
  var curbotmid = document.getElementById("botmid").innerHTML;
  if (curtopmid == curmiddle && curmiddle == curbotmid) {
    var print = "Player X won!"; 
     document.getElementById("player x won").innerHTML = print;
  }
}    
  
function checkIfXWonRightCol() {
  var curtopright = document.getElementById("topright").innerHTML;
  var curmidright = document.getElementById("midright").innerHTML;
  var curbotright = document.getElementById("botright").innerHTML;
  if (curtopright == curmidright && curmidright == curbotright) {
    var print = "Player X won!"; 
     document.getElementById("player x won").innerHTML = print;
  }
}



function checkIfOWonTopRow() {
  var curtopleft = document.getElementById("topleft").innerHTML;
  var curtopmid = document.getElementById("topmid").innerHTML;
  var curtopright = document.getElementById("topright").innerHTML;
  if (curtopleft == curtopmid && curtopmid == curtopright) {
    var print = "Player O won!"; 
     document.getElementById("player o won").innerHTML = print;
  }
}    
  
function checkIfOWonMidRow() {
  var curmidleft = document.getElementById("midleft").innerHTML;
  var curmiddle = document.getElementById("middle").innerHTML;
  var curmidright = document.getElementById("midright").innerHTML;
  if (curmidleft == curmiddle && curmiddle == curmidright) {
    var print = "Player O won!"; 
     document.getElementById("player o won").innerHTML = print;
  }
}
  
function checkIfOWonBotRow() {
  var curbotleft = document.getElementById("botleft").innerHTML;
  var curbotmid = document.getElementById("botmid").innerHTML;
  var curbotright = document.getElementById("botright").innerHTML;
  if (curbotleft == curbotmid && curbotmid == curbotright) {
    var print = "Player O won!"; 
     document.getElementById("player o won").innerHTML = print;
  }
}

function checkIfOWonDiag1() { 
  var curtopleft = document.getElementById("topleft").innerHTML;
  var curmiddle = document.getElementById("middle").innerHTML;
  var curbotright = document.getElementById("botright").innerHTML;
  if (curtopleft == curmiddle && curmiddle == curbotright) {
    var print = "Player O won!"; 
     document.getElementById("player o won").innerHTML = print;
  }
}

function checkIfOWonDiag2() {    
  var curtopright = document.getElementById("topright").innerHTML;
  var curmiddle = document.getElementById("middle").innerHTML;
  var curbotleft = document.getElementById("botleft").innerHTML;
  if (curtopright == curmiddle && curmiddle == curbotleft) {
    var print = "Player O won!"; 
     document.getElementById("player o won").innerHTML = print;
  }
}
  
function checkIfOWonLeftCol() {
  var curtopleft = document.getElementById("topleft").innerHTML;
  var curmidleft = document.getElementById("midleft").innerHTML;
  var curbotleft = document.getElementById("botleft").innerHTML;
  if (curtopleft == curmidleft && curmidleft == curbotleft) {
    var print = "Player O won!"; 
     document.getElementById("player o won").innerHTML = print;
  }
} 
  
function checkIfOWonMidCol() {
  var curtopmid = document.getElementById("topmid").innerHTML;
  var curmiddle = document.getElementById("middle").innerHTML;
  var curbotmid = document.getElementById("botmid").innerHTML;
  if (curtopmid == curmiddle && curmiddle == curbotmid) {
    var print = "Player O won!"; 
     document.getElementById("player o won").innerHTML = print;
  }
}    
  
function checkIfOWonRightCol() {
  var curtopright = document.getElementById("topright").innerHTML;
  var curmidright = document.getElementById("midright").innerHTML;
  var curbotright = document.getElementById("botright").innerHTML;
  if (curtopright == curmidright && curmidright == curbotright) {
    var print = "Player O won!"; 
     document.getElementById("player o won").innerHTML = print;
  }
}
