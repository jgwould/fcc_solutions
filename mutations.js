function mutation(arr){
  //arr to lower
  var firstWord = arr[0].toLowerCase();
  var secondWord = arr[1].toLowerCase();
//iterate through
  for(i = 0; i < secondWord.length; i++){
    //indexOf
    if(firstWord.indexOf(secondWord[i]) === -1){
      return false;
    }
  }
  return true;
}
mutation(["hello", "hey"]);