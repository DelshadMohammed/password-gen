// Assignment code here

//message prompt for number
var length = Number(
    prompt("User Please Enter A Password Length Between 8 And 128")
  ),
  //prompt for special charchters
  charType = prompt(
    "User Please Enter A Character Type: special, numeric, uppercase, lowercase."
  ),
  passwordText = generatePassword();
// function to generate random password
function generatePassword() {
  // my object literal for character sets to be used in gen
  var charSets = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeric: "0123456789",
    special: " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
  };
  var charSet = charSets[charType.toLowerCase()] || charSets.lowercase;
  var retVal = "";
  //for loop used to generate random numbers and characters
  for (var i = 0; i < length; i++) {
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return retVal;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// object literalls used for reference
var charSets = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeric: "0123456789",
  special: " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
