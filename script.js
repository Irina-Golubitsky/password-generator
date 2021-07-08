let upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerLetters= "abcdefghijklmnopqrstuvwxyz";
let nubers="0123456789";
let specialChar= "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~" +'"'; // I removed space

let upperInput=0;
let lowerInput=0;
let nuberInput=0;
let specialInput=0;

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");
// Assignment code here
function generatePassword(){
  let pwCharacterString="";
  if (upperInput=1){
    pwCharacterString=pwCharacterString+upperLetters;
  }
  if (lowerInput=1){
    pwCharacterString=pwCharacterString+lowerLetters;
  }
  if (nuberInput=1){
    pwCharacterString=pwCharacterString+nubers;
  }
  if (specialInput=1){
    pwCharacterString=pwCharacterString+specialChar;
  }
  
  
  


}


// Write password to the #password input
function writePassword() {
  let inLength = parseInt(prompt("Please enter password length (number between 8 and 128).", 8));
  if ((inLength>=8)&&(inLength<=128)){
   if (confirm ("Would you like to include uppercase letters?")){
    upperInput++;
   };
   if (confirm ("Would you like to include lowerrcase letters?")){
     lowerInput++;
   }
   if (confirm ("Would you like to include numbers?")){
     nuberInput++;
   }
   if (confirm ("Would you like to include special characters?")){
     specialInput++;
   } 
   if ((upperInput+lowerInput+nuberInput+specialInput)===0) {
     alert("Error! Please include at least one character type.");
     return;
   }else{ 
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
  }
} else {
  alert("Error! Password length should be an integer number between 8 and 128.");
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
