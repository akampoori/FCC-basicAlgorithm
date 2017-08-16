
/*Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

Remember to use Read-Search-Ask if you get stuck. Write your own code.
function mutation(arr) {
  return arr;
}
mutation(["hello", "hey"]);


Here are some helpful links:

String.prototype.indexOf()
*/

/*
// with for loop
function mutation(arr) {

  var testArrStr = arr[1].toLowerCase().split('');
  var targetStr = arr[0].toLowerCase();

  for (var i = 0; i < testArrStr.length; i++){

    if (targetStr.indexOf(testArrStr[i]) < 0){

      return false;
    }

  }

return true;
}
*/

// without for loop. also use every() method
function mutation(arr) {
  return arr[1].toLowerCase()
              .split('')
              .every(function (letter){
                return arr[0].toLowerCase()
                             .indexOf(letter) != -1;
              });
}
console.log(mutation(["Alien", "line"]));

/*Code Explanation:
Grab the second string, lowercase it and turn it into an array; then make sure every
one of its letters is a part of the lowercased first string.
Every will basically give you letter by letter to compare,
which we do by using indexOf on the first string. indexOf will give you -1 if
the current letter is missing. We check that not to be the case, for if this
happens even once every will be false.
*/
