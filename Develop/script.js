// Assignment code here

// ! TODO: Define 'generatePassword' function
// ! TODO: Assign value to 'password' to be returned
// TODO: Add series of prompts for password criteria
  // 1. Password length = 8-128 characters
  // 2. Lowercase, uppercase, numbers, special characters
// TODO: Validate the above input criteria
// TODO: Generate password based on criteria

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Input variables
var input = [""]
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var special = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var randomPassword = ""

function generatePassword() {
  console.log("Confirm button click works");
// 1. Password length = 8-128 characters
  var passwordLength = prompt("Choose password length from 8-128 characters:");
// Validate password length
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    window.alert("Password must be between 8-128 characters.");
    return
  }
// 2. Lowercase, uppercase, numbers, special characters
    var includeLowercase = confirm("Include lowercase characters?");
    // confirm lowercase
    if (includeLowercase === true) {
      for (var i = 0; i < lowercase.length; i++) {
        input.push(lowercase[i]);
      }
      console.log(input);
    }

    var includeUppercase = confirm("Include uppercase characters?")
    // confirm uppercase
    if (includeUppercase === true) {
      for (var i = 0; i < uppercase.length; i++) {
        input.push(uppercase[i]);
      }
      console.log(input)
    }

// ! TODO: Display password in box
  return "Generated password will go here"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
