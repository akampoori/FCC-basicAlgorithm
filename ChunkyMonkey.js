/*Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
function chunkArrayInGroups(arr, size) {
  // Break it up.
  return arr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);

Here are some helpful links:

Array.prototype.push()
Array.prototype.slice()
*/
// use for loop with slice and push method
/*function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArray=[];
  for (var i = 0; i < arr.length; i += size) {
    newArray.push(arr.slice(i, i + size));
}
  return newArray;
}*/

// use map method instead loop
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr=[];
  arr.map(function(element, i){
    if (i % size === 0){
      newArr.push(arr.slice(i, i+size));
    }
  })
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d", "e"], 3));
