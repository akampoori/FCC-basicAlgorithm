/*Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
function destroyer(arr) {
  // Remove all the values
  return arr;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);


Here are some helpful links:

Arguments object
Array.prototype.filter()
*/

function destroyer(arr) {
  // Remove all the values
   var args = Array.from(arguments).slice(1); // you can ommit slice(1)!
   return arr.filter(function(element) {
                      return args.indexOf(element) === -1;
                    });
}


// advance version and using ES6 -
/*function destroyer(arr) {
  return arr.filter(v => !~[].slice.call(arguments).indexOf(v));
}*/

console.log(destroyer([1, 2, 3, 1, 2, 3, 4], 2, 3));
