/*Falsy Bouncer
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr;
  });
}
bouncer([7, "ate", "", false, 9]);

Here are some helpful links:

Boolean Objects
Array.prototype.filter()
*/

/*
// filter without Boolean Objects
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(function(e){
    return e; // return only true element
  });
}
bouncer([7, "ate", "", false, 9]);
*/

// Another version with Boolean Objects
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(Boolean);
}
console.log(bouncer([7, "ate", "", false, 9]));
/*
The code with filter() goes through every element in an arr and if that
element is truthy it returns it, if not it gets discarded. See Boolean Objects
*/
