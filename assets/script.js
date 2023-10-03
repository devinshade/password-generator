// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// ! TODO: Assign values to be returned
// Input variables
var input = [""]
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var special = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var numbers = "0123456789"

// ! TODO: Define 'generatePassword' function
function generatePassword() {
  console.log("Confirm button click works");
// ! TODO: Add series of prompts for password criteria
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

    var includeUppercase = confirm("Include uppercase characters?");
    // confirm uppercase
    if (includeUppercase === true) {
      for (var i = 0; i < uppercase.length; i++) {
        input.push(uppercase[i]);
      }
      console.log(input);
    }

    var includeSpecial = confirm("Include special characters?");
    // confirm special
    if (includeSpecial === true) {
      for (var i = 0; i < special.length; i++) {
        input.push(special[i]);
      }
      console.log(input);
    }

    var includeNumbers = confirm("Include numbers?");
    // confirm numbers
    if (includeNumbers === true) {
      for (var i = 0; i < numbers.length; i++) {
        input.push(numbers[i]);
      }
      console.log(input);
    }

    // ! TODO: Validate the above input criteria
    if (includeUppercase === false && includeLowercase === false && includeSpecial === false && includeSpecial === false) {
      alert("Password must include at least 1 character option.");

      return;
    }

    // ! TODO: Generate password based on criteria
    var randomPassword = ""
    const confirmLength = parseInt(passwordLength);
    for (var i = 0; i <confirmLength; i++) {
      input[
        Math.floor(Math.random() * input.length)];

        randomPassword += input[
          Math.floor(Math.random() * input.length)];
    }
    // ! TODO: Display password in box
    return randomPassword;
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
