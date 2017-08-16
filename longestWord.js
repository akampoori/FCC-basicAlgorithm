/*
Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.


function findLongestWord(str) {
  return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

Here are some helpful links:

String.prototype.split()
String.length
*/

/*
function findLongestWord(str) {

  var wordsArr = str.split(" ");
  var longestWord = 0;
  for (var i= 0; i < wordsArr.length; i++){
    if (wordsArr[i].length > longestWord){
      longestWord = wordsArr[i].length;
    }

  }
  return longestWord;
}*/

/*//second version using Array.reduce()
function findLongestWord(str) {
  var strArray = str.split(" ");
  return strArray.reduce(function(a, b){
  	return b.length > a ? b.length : a;
  }, 0);
}*/

// or use Math.max method within reduce callback function
function findLongestWord(str) {
  return str.split(" ")
            .reduce(function(a, b){
              return Math.max(a, b.length)
            }, 0);
}



console.log(findLongestWord("What if we try a super-long word such as otorhinolaryngology"));
