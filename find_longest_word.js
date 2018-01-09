
function findLongestWord(str) {
  //split the string
  var splitString = str.split(" ");
  //set a var longest word equal to zero so it becomes a placeholder 
  var longestWord = 0;
  //for loop to loop throuh the splitString to check for the longest word in the string
  for (i = 0; i < splitString.length; i++){
    if(longestWord < splitString[i].length){
      //assign longestWord to splitString each time for the longest string each time until it finds the longest word and the function completes
      longestWord = splitString[i].length;
    }
  }
  return longestWord;
 
}

findLongestWord("The quick brown fox jumped over the lazy dog");
