var origBoard;
var currentPlayer = 1;

function take_turn(clicked_id) {
  // get the id that was clicked on
  var current = document.getElementById(clicked_id).innerHTML;
  alert(clicked_id)
  if (current == "O") {
     return;
  }
  document.getElementById("topleft").innerHTML = "X"
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



function tl_toX() {
  var current = document.getElementById("topleft").innerHTML;
  if (current == "O") {
     return;
  }
  document.getElementById("topleft").innerHTML = "X"
  checkIfXWonTopRow();
  checkIfXWonLeftCol();
  checkIfXWonDiag1();
}

function tm_toX() {
  var current = document.getElementById("topmid").innerHTML;
  if (current == "O") {
     return;
  }
  document.getElementById("topmid").innerHTML = "X";
  checkIfXWonTopRow();
  checkIfXWonMidCol();
}
 
function tr_toX() {
  var current = document.getElementById("topright").innerHTML;
  if (current == "O") {
     return;
  }
  document.getElementById("topright").innerHTML = "X";
  checkIfXWonTopRow();
  checkIfXWonRightCol();
  checkIfXWonDiag2();
}

function ml_toX() {
  var current = document.getElementById("midleft").innerHTML;
  if (current == "O") {
     return;
  }
  document.getElementById("midleft").innerHTML = "X";
  checkIfXWonMidRow();
  checkIfXWonLeftCol();
}

function m_toX() {
  var current = document.getElementById("middle").innerHTML;
  if (current == "O") {
     return;
  }
  document.getElementById("middle").innerHTML = "X";
  checkIfXWonMidRow();
  checkIfXWonMidCol();
  checkIfXWonDiag1();
  checkIfXWonDiag2();
}

function mr_toX() {
  var current = document.getElementById("midright").innerHTML;
  if (current == "O") {
     return;
  }
  document.getElementById("midright").innerHTML = "X";
  checkIfXWonMidRow();
  checkIfXWonRightCol();
}

function bl_toX() {
  var current = document.getElementById("botleft").innerHTML;
  if (current == "O") {
     return;
  }
  document.getElementById("botleft").innerHTML = "X";
  checkIfXWonBotRow();
  checkIfXWonLeftCol();
  checkIfXWonDiag2();
}

function bm_toX() {
  var current = document.getElementById("botmid").innerHTML;
  if (current == "O") {
     return;
  }
  document.getElementById("botmid").innerHTML = "X";
  checkIfXWonBotRow();
  checkIfXWonMidCol();
}

function br_toX() {
  var current = document.getElementById("botright").innerHTML;
  if (current == "O") {
     return;
  }
  document.getElementById("botright").innerHTML = "X";
  checkIfXWonBotRow();
  checkIfXWonRightCol();
  checkIfXWonDiag1();
}


function tl_to0() {
  var current = document.getElementById("topleft").innerHTML;
  if (current == "X") {
     return;
  }
  document.getElementById("topleft").innerHTML = "O";
  checkIfOWonTopRow();
  checkIfOWonLeftCol();
  checkIfOWonDiag1();
}

function tm_to0() {
  var current = document.getElementById("topmid").innerHTML;
  if (current == "X") {
     return;
  }
  document.getElementById("topmid").innerHTML = "O";
  checkIfOWonTopRow();
  checkIfOWonMidCol();
}
 
function tr_to0() {
  var current = document.getElementById("topright").innerHTML;
  if (current == "X") {
     return;
  }
  document.getElementById("topright").innerHTML = "O";
  checkIfOWonTopRow();
  checkIfOWonRightCol();
  checkIfOWonDiag2();
}

function ml_to0() {
  var current = document.getElementById("midleft").innerHTML;
  if (current == "X") {
     return;
  }
  document.getElementById("midleft").innerHTML = "O";
  checkIfOWonMidRow();
  checkIfOWonLeftCol();
}

function m_to0() {
  var current = document.getElementById("middle").innerHTML;
  if (current == "X") {
     return;
  }
  document.getElementById("middle").innerHTML = "O";
  checkIfOWonMidRow();
  checkIfOWonMidCol();
  checkIfOWonDiag1();
  checkIfOWonDiag2();
}

function mr_to0() {
  var current = document.getElementById("midright").innerHTML;
  if (current == "X") {
     return;
  }
  document.getElementById("midright").innerHTML = "O";
  checkIfOWonMidRow();
  checkIfOWonRightCol();
}

function bl_to0() {
  var current = document.getElementById("botleft").innerHTML;
  if (current == "X") {
     return;
  }
  document.getElementById("botleft").innerHTML = "O";
  checkIfOWonBotRow();
  checkIfOWonLeftCol();
  checkIfOWonDiag2();
}

function bm_to0() {
  var current = document.getElementById("botmid").innerHTML;
  if (current == "X") {
     return;
  }
  document.getElementById("botmid").innerHTML = "O";
  checkIfOWonBotRow();
  checkIfOWonMidCol();
}

function br_to0() {
  var current = document.getElementById("botright").innerHTML;
  if (current == "X") {
     return;
  }
  document.getElementById("botright").innerHTML = "O";
  checkIfOWonBotRow();
  checkIfOWonRightCol();
  checkIfOWonDiag1();
}
