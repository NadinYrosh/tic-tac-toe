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
  //holds all 9 spaces
  var spaces = [];
  //create spaces (all 9)
  for (i = 0; i < 3; i++) {  //y coordinates
    for(j = 0; j < 3; j++) {  //x coordinates
      spaces.push(new Space(i, j));
    }
  }
}
//checks for win condition (returns which player won)
Board.prototype.checkWin() {
  for (i = 0; i < 3; i++) {
    //check horizontal win
    if (((spaces[0 + i*3].squareValue === spaces[1 + i*3].squareValue) &&  (spaces[1 + i*3].squareValue === spaces[2 + i*3].squareValue)) && (spaces[0 + i*3].squareValue !== "")) {
      //return squareValue of winner?
      return spaces[0 + i*3].squareValue;
    }

    //check vertical win
    else if () {
      //return squareValue of winner?
    }
  }

  //check diagonal win
  if () {
    //return squareValue of winner?
  }
  return null;
}

//Game object, creates players and board, increments turn, and checks whether someone wins
function Game () {
  //create players
  player1 = new Player("X");
  player2 = new Player("O");
  //create board
  board = new Board();
  //who's turn is it
  var turn = "player1";
}
//calls next turn
Game.prototype.nextTurn() {
}

//interface logic
