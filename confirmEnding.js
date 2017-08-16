/*Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str;
}
console.log(confirmEnding("Bastian", "n"));

Here are some helpful links:

String.prototype.substr()
String.prototype.substring()
*/

/*function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var min = str.length - target.length;
  var max = str.length - 1;
  if(str.substr(min, max) === target) {
    return true;
  } else {
    return false;
  }
}
confirmEnding("Bastian", "n");
*/

/*function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if (target === ""){
    return false;
  } else if (str.substring(str.length - target.length) === target){
        return true;
      } else {
        return false;
      }
}*/

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str.substr(-target.length) === target; //dose not work with substring
}

console.log(confirmEnding("Bastian", "an"));
