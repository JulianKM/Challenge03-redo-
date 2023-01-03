// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)

var passwordLength = 8-128;
var lowerCase ="abcdefghijklmnopqrstuvwxyz";
var upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789"
var specialCharacters ="!@#$%^&*()+=<>";
var result = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwrdLength = prompt(
    "choose a number between 8 and 128"
  );
  if (passwordLength < 8 || passwordLength > 128 ) {
    prompt("enter a number between 8 and 128.");
  } else {
    var lowerCase = confirm("use lowerCase letters?");
    if(lowerCase){
      result += lowerCase
    };
    var upperCase = confirm("use upperCase letters?");
    if (upperCase){
      result += upperCase
    };
    var specialCharacters = confirm("use specialCharacters?");
    if (specialCharacters){
      result += specialCharacters
    };
    var numbers = confirm("use numbers?");
    if (numbers){
      result += numbers
    };
   
   return result }
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++){
    password += result.charAt(Math.floor(Math.random() * result.length))
  }

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);