
function titleCase(str) {
  //lowercase the string
  var TitleCaseString = str.toLowerCase().split(" ");
  
  for (i=0; i<TitleCaseString.length; i++){
    TitleCaseString[i] = TitleCaseString[i].charAt(0).toUpperCase() + TitleCaseString[i].slice(1);
  }
    
  return TitleCaseString.join(" ");
}

titleCase("I'm a little tea pot");
