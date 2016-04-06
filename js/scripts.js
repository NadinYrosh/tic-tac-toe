//business logic
function Player(mark) {
  this.symbol = mark;
}

function Space (Y, X){
  this.vertical = Y;
  this.horizontal = X;
  this.square = "";
}

function Board (){
  //create players
  player1 = newPlayer("X");
  player2 = newPlayer("O");
  var spaces = [];

  //create spaces (all 9)
  for (i = 0; i < 3; i++) {  //y coordinates
    for(j = 0; j < 3; j++) {  //x coordinates
      spaces.push(new Space(i, j))
    }
  }
}

//checks for win condition (returns which player won)
Board.prototype.checkWin() {


  return null;
}

//interface logic
