/*Truncate a string
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
function truncateString(str, num) {
  // Clear out that junk in your trunk
  return str;
}
truncateString("A-tisket a-tasket A green and yellow basket", 11);

Here are some helpful links:

String.prototype.slice()
*/

//substr version
/*function truncateString(str, num) {
  // Clear out that junk in your trunk
    if (str.length <= num){
      return str;
    } else if (num <= 3){
    return str.substr(0,num) + "...";
    }
  return str.substr(0,num-3) + "...";

}*/

//another version using slice() method as requested in the challenge
function truncateString(str, num) {
  // Clear out that junk in your trunk
   if (str.length <= num){
     return str;
   } else if (num <= 3){
     return (str.slice(0, num) + "...");
   }
     return (str.slice(0, num - 3) + "...");
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 42));
