var readline = require('readline');
var reader = readline.createInterface(process.stdin, process.stdout, null);

function HanoiGame() {
  this.stacks = [];
  for(var i = 0; i < 3; i++){
    this.stacks[i] = [];
  }
  this.stacks[0] = [3,2,1];
}

HanoiGame.prototype.makeMove = function (fromTower, toTower) {
  console.log(fromTower);
  console.log(toTower);
};

// var game = this;

HanoiGame.prototype.promptMove = function (promptCallback) {
  this.print();
  var fromTower;
  var toTower;
  reader.question("Take from which tower?", function(answer1) {
    fromTower = answer1;
    reader.question("Put on which tower?", function(answer2) {
      toTower = answer2;
      promptCallback(answer1, answer2);
      // reader.close();
    });
  });
};

HanoiGame.prototype.isValidMove = function (fromTower, toTower) {
  if ( this.stacks[toTower].length === 0 ) {
    // console.log("true");
    return true;
  } else if ( this.stacks[toTower].slice(-1) > this.stacks[fromTower].slice(-1)) {
    // console.log("true");
    return true;
  } else {
    // console.log("false");
    return false;
  }
};

HanoiGame.prototype.move = function (fromTower, toTower) {
  if ( this.isValidMove(fromTower, toTower)) {
    this.stacks[toTower].push(this.stacks[fromTower].pop());
  }
};

HanoiGame.prototype.print = function () {
  console.log(JSON.stringify(this.stacks));
};

HanoiGame.prototype.isWon = function () {
  if ( this.stacks[0].length === 0 ) {
    if ( this.stacks[1].length === 0 ) {
      console.log("true");
      return true;
    } else if ( this.stacks[2].length === 0) {
      console.log("true");
      return true;
    } else {
      console.log("false");
      return false;
    }
  } else {
    console.log("false");
    return false;
  }
};

HanoiGame.prototype.run = function(completionCallback) {
  game = this;
  this.promptMove(function (fromTower, toTower) {
    if (game.isValidMove(fromTower, toTower)) {
      game.move(fromTower, toTower);
      if (game.isWon()) {
        console.log("You won!");
        completionCallback();
      } else {
        game.run(completionCallback);
      }
    } else {
      console.log("That move is not allowed!");
      game.run(completionCallback);
    }
  });
};


var hg = new HanoiGame();
hg.run(function () {
  reader.close();
  console.log("Game Over");
});
// hg.promptMove();
// hg.isValidMove(0,1);
// hg.isValidMove(1,0);
// hg.isValidMove(0,2);
// hg.move(0,1);
// hg.print();
// hg.isWon();
// hg.stacks = [[],[3,2,1],[]];
// hg.isWon();
// hg.stacks = [[], [], [3,2,1]];
// hg.isWon();
// hg.move(0,1);
// console.log(hg.stacks);
