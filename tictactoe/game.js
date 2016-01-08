var board = require('./board');

function Game(reader, board) {
  this.board = board;
  this.marker = "X";
  this.reader = reader;
}

Game.prototype.switchPlayers = function () {
  if ( this.marker === "X") {
    this.marker = "O";
  } else {
    this.marker = "X";
  }
};

Game.prototype.run = function(completionCallback) {
  game = this;
  mark = this.marker;
  this.promptMove(function (x, y) {
    if (game.isValidMove(x, y)) {
      game.move(x, y, mark);
      if (game.board.isWon()) {
        console.log(mark + 's won!');
        completionCallback();
      } else {
        game.switchPlayers();
        game.run(completionCallback);
      }
    } else {
      console.log("That move is not allowed!");
      game.run(completionCallback);
    }
  });
};


Game.prototype.promptMove = function (promptCallback) {
  this.board.print();
  var x;
  var y;
  var game = this;
  this.reader.question("Which Row?", function(answer1) {
    x = answer1;
    game.reader.question("Which Column?", function(answer2) {
      y = answer2;
      promptCallback(answer1, answer2);
      // reader.close();
    });
  });
};

Game.prototype.isValidMove = function (x, y) {
  if ( this.board.grid[x][y] === "*" ) {
    return true;
  } else {
    return false;
  }
};

Game.prototype.move = function (x, y, marker) {
  if ( this.isValidMove(x, y)) {
    this.board.grid[x][y] = marker;
  }
};

module.exports = Game;
