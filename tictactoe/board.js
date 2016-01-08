function Board() {
  this.grid = [["*","*","*"],["*","*","*"],["*","*","*"]];

}

Board.prototype.print = function () {
  console.log(JSON.stringify(this.grid[0]));
  console.log(JSON.stringify(this.grid[1]));
  console.log(JSON.stringify(this.grid[2]));
};

Board.prototype.placeMarker = function(x, y, marker) {
  this.grid[x][y] = marker;
};

Board.prototype.isWon = function() {
  var b = this.grid;
  var tBoard = this.grid.transpose();
  var gameWon = false;

  this.grid.forEach(function(row){
    if ( row[0] != "*" && row[0] === row[1] && row[0] === row[2]) {
      gameWon = true;
    }
  });


  tBoard.forEach(function(row){
    if ( row[0] != "*" && row[0] === row[1] && row[0] === row[2]) {
      gameWon = true;
    }
  });

  if ( b[0][0] != "*" && b[0][0] === b[1][1] && b[0][0] === b[2][2]) {
    gameWon = true;
  } else if ( b[0][2] != "*" && b[0][2] === b[1][1] && b[0][2] === b[2][0]) {
    gameWon = true;
  }
  return gameWon;
};

Array.prototype.transpose = function () {
  var columns = [];
  var i;

  for (i = 0; i < this[0].length; i++) {
    columns.push([]);
  }

  for (i = 0; i < this.length; i++) {
    for (var j = 0; j < this[i].length; j++) {
      columns[j].push(this[i][j]);
    }
  }

  return columns;
};

module.exports = Board;


// var B = new Board();
// B.placeMarker(0,0,"X");
// B.placeMarker(1,0, "X");
// B.placeMarker(2,0, "X");
// console.log(B.isWon());
