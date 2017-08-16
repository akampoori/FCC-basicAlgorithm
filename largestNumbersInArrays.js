/*
Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array.
For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access
each member with array syntax arr[i].

Remember to use Read-Search-Ask if you get stuck. Write your own code.

function largestOfFour(arr) {
  // You can do this!
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

Here are some helpful links:

Comparison Operators
*/
/*function largestOfFour(arr) {
  // You can do this!
  var largeNum = 0;
  var newArray =[];
  for (var i = 0; i < arr.length; i++){

    for (var j = 0; j < arr[i].length; j++){
       if (largeNum < arr[i][j]){
         largeNum = arr[i][j];
       }
       newArray[i] = largeNum;
    }

    largeNum = 0;
  }

  return newArray;
}*/

//another version using map and Math.max.apply methods
function largestOfFour(arr) {
  // You can do this!
  return arr.map(function(subArr){
    return Math.max.apply(this ,subArr);
  });
}

console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
