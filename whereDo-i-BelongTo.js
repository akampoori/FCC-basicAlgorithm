
/*Where do I belong
Return the lowest index at which a value (second argument) should be inserted
into an array (first argument) once it has been sorted. The returned value
should be a number. For example, getIndexToIns([1,2,3,4], 1.5) should return 1
because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array
has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and
greater than 5 (index 1).

Remember to use Read-Search-Ask if you get stuck. Write your own code.

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  return num;
}
getIndexToIns([40, 60], 50);

Here are some helpful links:

Array.prototype.sort()
*/



function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  arr.sort(function(a,b){
    return a-b;
  });

// the next two line is just for testing
  console.log("The sorted array: " + JSON.stringify(arr));
  console.log(num + " is in the index of " + arr.indexOf(num) + " in the above array.");

   return arr.indexOf(num);

}

console.log(getIndexToIns([40, 60], 50));
