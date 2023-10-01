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

function generatePassword() {
  console.log("Confirm button click works")


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
