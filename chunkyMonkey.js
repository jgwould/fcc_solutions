function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArray = [];
  //when using a while loop, it is important to have a counter var
  var count = 0;
  //using this while loop like a for loop with count as a variable
  while( count< arr.length){
    newArray.push(arr.slice(count, count+size));
    count += size; //or count = count + size; but += is shorthand for that
  }
    
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
