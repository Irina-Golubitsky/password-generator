// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword(){

}


// Write password to the #password input
function writePassword() {
  let inLength = parseInt(prompt("Please enter password length (number between 8 and 128).", 8));
  if ((inLength>=8)&&(inLength<=128)){
   let upperCase = confirm ("Would you like to include uppercase letters?");
   let lowerCase = confirm ("Would you like to include lowerrcase letters?");
   let numbers = confirm ("Would you like to include numbers?");
   let specialChar = confirm ("Would you like to include special characters?");
   console.log(upperCase);
   if ((!upperCase)&&(!lowerCase)&&(!numbers)&&(!specialChar)) {
     alert("Error! Please include at least one character type.");
     return;
   }else{ 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }
} else {
  alert("Error! Password length should be an integer number between 8 and 128.");
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
