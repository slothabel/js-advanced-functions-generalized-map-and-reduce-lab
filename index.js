
function map(arr, callback) {
    let negs = []
    for(var i = 0; i < arr.length; i++) {
        //for each element in the array, save it to currElmt
        const currElmt = arr[i]
        //add the return value of calling the current callback function along with the current element
        negs.push(callback(currElmt))
    }      
    return negs
}

function reduce(arr, callback, startingValue) {
    //declare variable, currently its value is just undefined
    let total;
    //if startingValue is true/is not 0
    if (startingValue) {
        //then total takes the startingValue's value
      total = startingValue;
      for (let i = 0; i < arr.length; i++) {
          //then total becomes the result of the callback function 
          //using the current number being iterated and the current value in total
        total = callback(arr[i], total);
      }
      //return total(part of the "if startvalue is true/not0" branch)
      return total;
      //else, if startvalue is false/NOT 0
    } else {
        //make the total whatever number is in the first element 
        //of the source array passed in originally
      total = arr[0];
      for (let i = 1; i < arr.length; i++) {
        //then total becomes the result of the callback function 
        //using the current number being iterated and the current value in total  
        total = callback(arr[i], total);
      }
      return total;
    }
  }