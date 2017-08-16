/*
Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot");


Here are some helpful links:

String.prototype.split()
*/


// split version with loop
/*
function titleCase(str) {

  str = str.toLowerCase().split(' ');       // will split the string delimited by space into an array of words
  for(var i = 0; i < str.length; i++){      // str.length holds the number of occurrences of the array...
    str[i] = str[i].split('');              // splits the array occurrence into an array of letters
    str[i][0] = str[i][0].toUpperCase();    // converts the first occurrence of the array to uppercase
    str[i] = str[i].join('');               // converts the array of letters back into a word.
  }
    return str.join(' ');
}*/

//another version without split or loop - using replace method with reg. exp.
function titleCase(str){
  str = str.toLowerCase().replace(/(^|\s)[a-z]/g, function(letter) {
    return letter.toUpperCase();
  });
  return str;
}

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT. I'm a litTle tEa pOt"));

/* explaination of the above code

/(^|\s)[a-z]/g

matches any letter preceded by whitespace or the beginning of the string.
I originally had \b boundary like /\b[a-z]/g but as was pointed out that breaks
by converting i'm to I'M which we don't want that according to requirement

function(letter){return letter.toUpperCase();

takes the values returned by the regular expression and processes them.
Here we are only interested in the full string returned so we don't need
a second parameter to reference the capturing group created by
the ( ) around the first half of the string.
The function returns that string converted to uppercase.
Converting whitespace to uppercase has no effect so we don't need to wrap
the [a-z] in ( ) to reference it as the third parameter.

As we have these as the two parameters to a replace call the regular
expression finds the characters in the string that need to be updated
and the function defines what to replace them with. A string replace can have
plain text or a regular expression as the first (letter) parameter and either
plain text (which may contain special values referring back to the regular
expression) or a function as the second parameter providing the value to
replace the value that matched the first string with.
*/
