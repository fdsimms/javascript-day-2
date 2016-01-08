var Index = require('./index');
var readline = require('readline');
var reader = readline.createInterface(process.stdin, process.stdout, null);

var board = new Index.Board();
var game = new Index.Game(reader, board);

game.run(function () {
  game.board.print();
  console.log("Game over!");
  game.reader.close();
});
