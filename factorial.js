/*
Factorialize a Number
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Arithmetic Operators

function factorialize(num) {
  return num;
}
factorialize(5);

*/

// version 1
/*function factorialize(num) {

  var factor = 1;
  for (var i = 1; i <= num; i++) {
    factor *= i;
  }
  return factor;
}*/

// recursive version
function factorialize(num) {
  if (num === 0){ return 1;}
      return (num * factorialize(num - 1));
}

console.log(factorialize(5));
