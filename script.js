let upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerLetters = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~" + '"'; // I removed space

let upperInput = 0;
let lowerInput = 0;
let numberInput = 0;
let specialInput = 0;
let chartypes = 0;
let pwCharacterString = "";
let password = "";
let inputLength = 0;
let randomCharacter = "";


// Get references to the #generate element
let generateBtn = document.querySelector("#generate");
// Assignment code here
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
function generatePassword() {
  for (i = 1; i <= (inputLength - chartypes); i++) {
    password = password + pwCharacterString.charAt(getRandomInt(0, pwCharacterString.length - 1));
  }
  if (upperInput === 1) {
    randomCharacter = upperLetters.charAt(getRandomInt(0, upperLetters.length - 1));
    randomplace = getRandomInt(1, password.length);
    password = password.slice(0, randomplace - 1) + randomCharacter + password.slice(randomplace - 1, password.length);
  }
  if (lowerInput === 1) {
    randomCharacter = lowerLetters.charAt(getRandomInt(0, upperLetters.length - 1));
    randomplace = getRandomInt(1, password.length);
    password = password.slice(0, randomplace - 1) + randomCharacter + password.slice(randomplace - 1, password.length);
  }
  if (numberInput === 1) {
    randomCharacter = numbers.charAt(getRandomInt(0, numbers.length - 1));
    randomplace = getRandomInt(1, password.length);
    password = password.slice(0, randomplace - 1) + randomCharacter + password.slice(randomplace - 1, password.length);
  }
  if (specialInput === 1) {
    randomCharacter = specialChar.charAt(getRandomInt(0, specialChar.length - 1));
    randomplace = getRandomInt(1, password.length);
    password = password.slice(0, randomplace - 1) + randomCharacter + password.slice(randomplace - 1, password.length);
  }
  return password;
}


// Write password to the #password input
function writePassword() {
  upperInput = 0;
  lowerInput = 0;
  numberInput = 0;
  specialInput = 0;
  chartypes = 0;
  pwCharacterString = "";
  password = "";
  inputLength = 0;
  randomCharacter = "";
  inputLength = parseInt(prompt("Please enter password length (number between 8 and 128).", 8));
  if ((inputLength >= 8) && (inputLength <= 128)) {
    if (confirm("Would you like to include uppercase letters?")) {
      upperInput++;
      pwCharacterString = pwCharacterString + upperLetters;
      chartypes++;
    };
    if (confirm("Would you like to include lowerrcase letters?")) {
      lowerInput++;
      pwCharacterString = pwCharacterString + lowerLetters;
      chartypes++;
    }
    if (confirm("Would you like to include numbers?")) {
      numberInput++;
      pwCharacterString = pwCharacterString + numbers;
      chartypes++;
    }
    if (confirm("Would you like to include special characters?")) {
      specialInput++;
      pwCharacterString = pwCharacterString + specialChar;
      chartypes++;
    }
    if ((upperInput + lowerInput + numberInput + specialInput) === 0) {
      alert("Error! Please include at least one character type.");
      return;
    } else {
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
