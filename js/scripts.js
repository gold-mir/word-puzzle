var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function isVowel(letter){
  return vowels.indexOf(letter) !== -1;
  //functionally the same as:
  // if(vowels.indexOf(letter) === -1){
  //   return false;
  // } else {
  //   return true;
  // }
}

function removeVowels (stringWithVowels) {
  //Split string into array of it's characters
  var individualCharacters = stringWithVowels.split('');
  var output = "";
  //Loop through array of characters
  for (var index = 0; index < individualCharacters.length; index += 1){
    //check if character at current index is a vowel
    var character = individualCharacters[index];
    if(isVowel(character)){
      //replace character with '-'
      individualCharacters[index] = '-';
    }
  }
  //add all elements in individualCharacters back together into one string
  for (var index = 0; index < individualCharacters.length; index += 1){
    var character = individualCharacters[index];
    output += character;
  }
  // return string with vowels removed
  return output;
}

$(document).ready(function(){
  var answer = "You can do it!";
  var hint = removeVowels(answer);
  $("#hint-string > *:first-child").text(hint);
  $("#guess-form").submit (function (event){
    event.preventDefault ();
    

  });
});
