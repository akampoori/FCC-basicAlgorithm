function largestOfFour(arr) {
  // You can do this with map and reduce methods
  return arr.map(function(subArr){
    return subArr.reduce(function(previousVal, currentVal){
      if (currentVal > previousVal){
        return currentVal;
      } else {
        return previousVal;
      }
    });
  });
}

console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
