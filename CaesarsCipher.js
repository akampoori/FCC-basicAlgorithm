/*Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known
as a shift cipher. In a shift cipher the meanings of the letters are shifted by
some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are
shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic
character (i.e. spaces, punctuation), but do pass them on.

Remember to use Read-Search-Ask if you get stuck. Try to pair program.
Write your own code.
function rot13(str) { // LBH QVQ VG!
  return str;
}
// Change the inputs below to test
rot13("SERR PBQR PNZC");


Here are some helpful links:

String.prototype.charCodeAt()
String.fromCharCode()
*/
/*
// beginer version
function rot13(str) { // LBH QVQ VG!

 var newStr = [];
  //var myStr = str.split(' ')
  var charCode = "";
  str = str.toUpperCase();

  for (var i=0; i<str.length; i++){

    charCode = str.charCodeAt(i);
    if (charCode > 64 && charCode <78) {
      newStr += String.fromCharCode(charCode +13);
    } else if (charCode > 77 && charCode < 92){
      newStr += String.fromCharCode(charCode -13)
    } else if (charCode === 32){
      newStr += " ";
    } else {
      newStr += String.fromCharCode(charCode);
    }
  }
  return newStr;
}
// Change the inputs below to test
console.log(rot13("V QVQ VG"));
*/

/*
// another version using forEach method
function rot13(str) {
  var result = [];

  str.split('').forEach(function(i) {
    if (/[A-Z]/.test(i)) {
      i = (String.fromCharCode(65 + (i.charCodeAt(0) - 65 + 13) % 26));
    }
      result.push(i);
  });

  return result.join('');
}*/

/*
// another version with map method
function rot13(str) { // LBH QVQ VG!
    // Split str into a character array
    return str.split('')
        // Iterate over each character in the array
        // c = current element
        // i = current index
        .map(function(c, i) {
            // Convert char to a character code
            var strCode = str.charCodeAt(i);
            // Checks if character lies between A - M
            if (strCode >= 65 && strCode <= 77) {
                return String.fromCharCode((strCode) + 13);
                // Checks if character lies betweenm N - Z
            } else if (strCode >= 78 && strCode <= 90) {
                return String.fromCharCode((strCode) - 13);
                // Return character
            } else {
                return c;
            }
            //console.log("i: " + i + " : " + c + " : " + strCode + " : " + strChange);
        }).join(''); // Rejoin the array into a string
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
*/

/*
// as Above but with map() very advance and unreadable
function rot13(str) {
  return str.split('').map(i => i = /[A-Z]/.test(i) ? (String.fromCharCode(65 + (i.charCodeAt(0) - 65 + 13) % 26)) : i).join('');
}*/


//advance version with replace method() and regExp
function rot13(str) { // LBH QVQ VG!
  return str.replace(/[A-Z]/g, function(letter){
    return String.fromCharCode((letter.charCodeAt(0) % 26) + 65)
  });
}

/*
//Above code in ES6 syntax
function rot13(str) { // LBH QVQ VG!
  return str.replace(/[A-Z]/g, letter => String.fromCharCode((letter.charCodeAt(0) % 26) + 65));
}
*/
/*
// another advance version slightly diffrent from Above using test
function rot13(str) {
  return str.replace(/[A-Z]/ig, c => (
    String.fromCharCode(c.charCodeAt() + (/[A-M]/.test(c) ? 13 : -13))
  ));
}
*/

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC. V QVQ VG"));
