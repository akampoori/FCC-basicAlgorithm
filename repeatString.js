/*Repeat a string repeat a string
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
function repeatStringNumTimes(str, num) {
  // repeat after me
      return str;
}
repeatStringNumTimes("abc", 3);

Here are some helpful links:

Global String Object
*/

/*function repeatStringNumTimes(str, num) {
  // repeat after me
  var newStr = [];
  if (num<0) {
    return newStr = "";
  }
  for (var i = 0; i < num; i++) {
    newStr.push(str);
  }
  return newStr.join('');
}*/

//recursive version
function repeatStringNumTimes(str, num) {
  // repeat after me
    if(num <= 0){
      return "";
    } else if (num === 1) {
        return str;
      } else {
       return str + repeatStringNumTimes(str, num - 1);
     }
}

console.log(repeatStringNumTimes("abc", 3));
