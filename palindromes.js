/*Check for Palindromes
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

function palindrome(str) {
  // Good luck!
  return true;
}
palindrome("eye");

Here are some helpful links:

String.prototype.replace()
String.prototype.toLowerCase()
*/



//version 1
/*
function palindrome(str) {
    strClean = str.replace(/[\W_]/g, '').toLowerCase();
    str = strClean.split('').reverse().join('');
  return (str === strClean);
}*/

// version 2
function palindrome(str) {

  str = str.replace(/[\W_]/g, '').toLowerCase();
  return (str === str.split('').reverse().join(''));

}

var newStr = palindrome("My age is 0, 0 si ega ym.");

console.log(newStr);
