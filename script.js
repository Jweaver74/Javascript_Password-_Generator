// Assignment code here
var generateBtn = document.querySelector("#generate");

  var numbers = ["0","1","2","3","4","5","6","7","8","9"];
  var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var special = ["!","@","#","$","%","^","&","*","'","(",")","+",",","-",".","/",":",";","<",">","=","?","[","]","{","}",""];


function questions(){
  var isValid = false;
  do{
    var length = promt("Choose password length between 8 and 128");
    var askNumbers = confirm("Do you to inculde numbers in you password?");
    var askLowercase = confirm("Do you want to include lower case letters in your password?");
    var askUppercase = confirm("Do you want to include upper case letters in your password?");
    var askSpecial = confirm("Do you want to include special characters in your password?");
    var responses = {
      length: length,
      askNumbers: askNumbers,
      askLowercase: askLowercase,
      askUppercase: askUppercase,
      askSpecial: askSpecial
    }

    if((length < 8)||(length > 128))
    alert("Choose number between 8 and 128");
    else if ((!askNumbers)&&(!askLowercase)&&(!askUppercase)&&(!askSpecial))
    alert("You must choose.");
    else isValid = true;
  }
  while(!isValid);
  return responses;
  
}
function generatePassword(){
var passwordOptions = questions();
var possibleCombo = [];
var finalPassword = "";

if (passwordOptions.askNumbers){
  for (var i of numbers)
  possibleCombo.push(i);
}
if (passwordOptions.askLowercase){
  for (var i of lowercase);
  possibleCombo.push(i);
}
if (passwordOptions.askUppercase){
  for (var i of uppercase);
  possibleCombo.push(i);
}
if (passwordOptions.askSpecial){
  for(var i of special);
  possibleCombo.push(i);
}

console.log(finalPassword);

return finalPassword;
}


// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  console.log("test")
  return "Jason"
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
