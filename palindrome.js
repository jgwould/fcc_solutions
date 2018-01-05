function palindrome(str) {
  //remove all unwanted characters and lowercase the string
  var re = /[\W_]/g;
  var lowReplaceStr = str.toLowerCase().replace(re, '');
  // split characters, reverse and join
  var revStr = lowReplaceStr.split('').reverse().join('');
  //see if reversed string equals lower cased string without unwanted characters (boolean)
  
  return revStr === lowReplaceStr;
}
palindrome("eye");
