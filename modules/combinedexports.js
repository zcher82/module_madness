var randomNumber = require('./randomGenerator');
var usDollar = require('./usdollar');

function numberOne() {
  return usDollar(randomNumber(100, 1000000));

}

function balance() {
  return "Account balance: \n"
}

module.exports.red = numberOne;
module.exports.blue = balance;
