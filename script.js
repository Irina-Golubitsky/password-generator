// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  let inLength = parseInt(prompt("Please enter password length (number between 8 and 128)", 8));
  if ((inLength>=8)&&(inLength<=128)){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
} else {
  alert("Error! Password length should be an integer number between 8 and 128");
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
