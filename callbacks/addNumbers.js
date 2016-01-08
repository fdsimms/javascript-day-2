var readline = require('readline');

var reader = readline.createInterface(process.stdin, process.stdout, null);

var addNumbers = function (sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("Please enter a number.", function (answer) {
      var num = sum + parseInt(answer);
      console.log(num);
      addNumbers(num, numsLeft - 1, completionCallback);
    });
  } else {
    completionCallback(sum);
  }
};


addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
});
