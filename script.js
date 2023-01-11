// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)

var passwordLength = 8 - 128;
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789"
var specialChar = "!@#$%^&*()+=<>";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var result = "";
  var passwordLength = prompt(
    "choose a number between 8 and 128"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("enter a number between 8 and 128.");
  } else {
    var lowerCase = confirm("use lowerCase letters?");
    if (lowerCase) {
      result += lowercaseLetters
    };
    var upperCase = confirm("use upperCase letters?");
    if (upperCase) {
      result += uppercaseLetters
    };
    var specialCharacters = confirm("use specialCharacters?");
    if (specialCharacters) {
      result += specialChar
    };
    var numbers = confirm("use numbers?");
    if (numbers) {
      result += num
    };

    
  }
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    password += result.charAt(Math.floor(Math.random() * result.length))
  }
  return password
}


  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);