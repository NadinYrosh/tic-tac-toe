//business logic

//player object (holds "X" or "O" symbol)
function Player(mark) {
  this.symbol = mark;
}

//space object (9 spaces in a board), holds value of square (Blank or player symbol)
function Space (Y, X) {
  this.vertical = Y;
  this.horizontal = X;
  this.squareValue = "";
}

//board object, creates spaces (w/ coordinates), also has checkWin() function
function Board () {
  //holds all 9 this.spaces
  this.spaces = [];
  //create this.spaces (all 9)
  for (i = 0; i < 3; i++) {  //y coordinates
    for(j = 0; j < 3; j++) {  //x coordinates
      this.spaces.push(new Space(i, j));
    }
  }
}
//checks for win condition (returns which player won)
Board.prototype.checkWin = function() {
  for (i = 0; i < 3; i++) {
    //check horizontal win
    if (((this.spaces[0 + i*3].squareValue === this.spaces[1 + i*3].squareValue) &&  (this.spaces[1 + i*3].squareValue === this.spaces[2 + i*3].squareValue)) && (this.spaces[0 + i*3].squareValue !== "")) {
      //return squareValue of winner
      return this.spaces[0 + i*3].squareValue;
    }
    //check vertical win
    else if (((this.spaces[0 + i*1].squareValue === this.spaces[1 + i*1].squareValue) &&  (this.spaces[1 + i*1].squareValue === this.spaces[2 + i*1].squareValue)) && (this.spaces[0 + i*1].squareValue !== "")) {
      //return squareValue of winner?
      return this.spaces[0 + i*3].squareValue;
    }
  }
  //check diagonal win
  if ((((this.spaces[0].squareValue === this.spaces[4].squareValue) &&  (this.spaces[4].squareValue === this.spaces[8].squareValue)) && (this.spaces[0].squareValue !== "")) || (((this.spaces[2].squareValue === this.spaces[4].squareValue) &&  (this.spaces[4].squareValue === this.spaces[6].squareValue)) && (this.spaces[2].squareValue !== ""))){
  //return squareValue of winner?
  return this.spaces[4].squareValue;
  }
  //return null if no winners
  return null;
}
//marks a space, returns false if space is taken
Board.prototype.markSpace = function(y_coordinate, x_coordinate, playerMark) {
  //calculate array location (based on coordinates)
  var location =  x_coordinate + 3*y_coordinate;
  //if space is not taken
  if (this.spaces[location.squareValue] === ""){
    //places playerMark in that space (space.SquareValue)
    this.spaces[location].squareValue = playerMark;
    return true;
  }
  //else return false
  else {
    return false;
  }
}
Board.prototype.allFull = function () {
  //assume full board
  var isFull = true;
  //loop through all this.spaces
  for (i = 0; i < 9; i++) {
    //if a space is empty
    if (this.spaces[i].squareValue === "") {
      //all the this.spaces are not full
      isFull = false;
    }
  }
  //return isFull
  return isFull;
}

//Game object, creates players and board, increments turn, and checks whether someone wins
function Game () {
  //create players
  player1 = new Player("X");
  player2 = new Player("O");
  //create board
  board = new Board();
  //who's turn is it
  this.playerTurn = "player1";
}
//returns whos turn it is
Game.prototype.whosTurn = function() {
  return this.playerTurn;
}
//perform a turn, take coordinates, and toggle player turn
Game.prototype.takeTurn = function(y_coordinate, x_coordinate) {
  //call board function to mark a space
  if (this.playerTurn === "player1") { //who's turn is it?
    //if player 1, use player1 symbol
    if (board.markSpace(y_coordinate, x_coordinate, player1.symbol) === false) {
      return false; //if false (space was taken), escape from method
    }
  }
  else {
    //if player 2 turn, use player2 symbol
    if (board.markSpace(y_coordinate, x_coordinate, player2.symbol) === false) {
      return false; //if false (space was taken), escape from method
    }
  }
  //check for winner
  if (board.checkWin() === false) {
    //toggle turn
    if (this.playerTurn === "player1") {
      this.playerTurn = "player2";
    }
    else {
      this.playerTurn = "player1";
    }
  }
  //else don't toggle turn (so UI can print who's turn it is)
  else {};
  return true;
}
//is the game finished?
Game.prototype.isFinished = function() {
  //call board.checkWin
  if (board.checkWin() === null) {
    //if 'not' a winner, check for "all full"
    if (board.allFull() === true) {
      return "tie";
    }
  }
  else {
    //board.checkWin returns "X" or "O"
    return board.checkWin();
  }
}


//user interface logic

//function to run game
function runGame(y_coordinate, x_coordinate) {
  //call ourGame.takeTurn(y_coordinate, x_coordinate)
    //if space was taken
  if (ourGame.takeTurn(y_coordinate, x_coordinate) === false) {
    alert("false");
    //return false
    return false;
  }
  else {
    //call ourGame.isFinished
    if (ourGame.isFinished()  === "X"){
      //if finished, pop up winner banner
      alert("Player1 won");
    } else if (ourGame.isFinished()  === "O"){
      alert("player2 won");
    } else if (ourGame.isFinished()  === "tie"){
      alert("You have a tie");
    } else{
      //display result of ourGame.whosTurn
      alert(ourGame.whosTurn());
    }
  }
}


$(document).ready(function() {
  //created a new game
  ourGame = new Game;

  //.click functions for each table id
  $("#2y2x").click(function(){

    //call runGame() function
    if (runGame(2,2) === true) {
      if (ourGame.whosTurn === "player1") {
        //place a mark on the board
        $("#2y2x").text("X");
      }
      else {
        //place a mark on the board
        $("#2y2x").text("O");
      }
    }
  });
  //.click functions for each table id
  $("#2y1x").click(function(){
    //call runGame() function
    if (runGame(2,1) === true) {
      if (ourGame.whosTurn === "player1") {
        //place a mark on the board
        $("#2y1x").text("X");
      }
      else {
        //place a mark on the board
        $("#2y1x").text("O");
      }
    }
  });
  //.click functions for each table id
  $("#2y0x").click(function(){
    //call runGame() function
    if (runGame(2,0) === true) {
      if (ourGame.whosTurn === "player1") {
        //place a mark on the board
        $("#2y0x").text("X");
      }
      else {
        //place a mark on the board
        $("#2y0x").text("O");
      }
    }
  });
  //.click functions for each table id
  $("#1y2x").click(function(){
    //call runGame() function
    if (runGame(1,2) === true) {
      if (ourGame.whosTurn === "player1") {
        //place a mark on the board
        $("#1y2x").text("X");
      }
      else {
        //place a mark on the board
        $("#1y2x").text("O");
      }
    }
  });
  //.click functions for each table id
  $("#1y1x").click(function(){
    //call runGame() function
    if (runGame(1,1) === true) {
      if (ourGame.whosTurn === "player1") {
        //place a mark on the board
        $("#1y1x").text("X");
      }
      else {
        //place a mark on the board
        $("#1y1x").text("O");
      }
    }
  });
  //.click functions for each table id
  $("#1y0x").click(function(){
    //call runGame() function
    if (runGame(1,0) === true) {
      if (ourGame.whosTurn === "player1") {
        //place a mark on the board
        $("#1y0x").text("X");
      }
      else {
        //place a mark on the board
        $("#1y0x").text("O");
      }
    }
  });
  //.click functions for each table id
  $("#0y2x").click(function(){
    //call runGame() function
    if (runGame(0,2) === true) {
      if (ourGame.whosTurn === "player1") {
        //place a mark on the board
        $("#0y2x").text("X");
      }
      else {
        //place a mark on the board
        $("#0y2x").text("O");
      }
    }
  });
  //.click functions for each table id
  $("#0y1x").click(function(){
    //call runGame() function
    if (runGame(0,1) === true) {
      if (ourGame.whosTurn === "player1") {
        //place a mark on the board
        $("#0y1x").text("X");
      }
      else {
        //place a mark on the board
        $("#0y1x").text("O");
      }
    }
  });
  //.click functions for each table id
  $("#0y0x").click(function(){
    //call runGame() function
    if (runGame(0,0) === true) {
      if (ourGame.whosTurn === "player1") {
        //place a mark on the board
        $("#0y0x").text("X");
      }
      else {
        //place a mark on the board
        $("#0y0x").text("O");
      }
    }
  });



});
