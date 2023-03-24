//Arrays for lowercase, uppercase, numbers, and special characters
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
numArray= [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
specialCharacter = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "_", "=", "{", "}", "[", "]", "|", "\\", "/", ":", ";", '"', "'", "<", ">", ",", ".", "?"]


//Code runs when Generate Password button is clicked
function generatePassword() {

  // Ask user for password length
  var userLength = window.prompt("How long would you like your password to be?(Must be 8-128 characters)")

  //If user's input length is not between 8-128 characters, end function
  if (userLength < 8 || userLength > 128) {
    window.alert("Password needs to be between 8-128 characters")
    return 
  }

  //Ask user for lowercase
  var userLowerCase = window.confirm("Do you want lowercase letters in your password?")

  //Ask user for uppercase
  var userUpperCase = window.confirm("Do you want uppercase letters in your password?")

  //Ask user for numbers
  var userNumber = window.confirm("Do you want numbers in your password?")

  //Ask for special characters
  var userSpecial = window.confirm("Do you want special characters in your password?")

  // if user chooses no for all, then end function
  if (
    (!userLowerCase) && 
    (!userUpperCase) &&
    (!userNumber) &&
    (!userSpecial)
  ) {
    window.alert("You need to choose at least one.")
    return
  }

  //Create new array with all specifications user wants
  var userSpecs = []

  //Create array that contains one of each user specification
  var random = []

  if (userLowerCase) {
    userSpecs = lowerCase
    random.push(lowerCase[Math.floor(Math.random()*lowerCase.length)])
  } 

  if (userUpperCase) {
    userSpecs = userSpecs.concat(upperCase) 
    random.push(upperCase[Math.floor(Math.random()*upperCase.length)])
  } 

  if (userNumber) {
    userSpecs = userSpecs.concat(numArray)
    random.push(numArray[Math.floor(Math.random()*numArray.length)])
  }

  if (userSpecial) {
    userSpecs = userSpecs.concat(specialCharacter)
    random.push(specialCharacter[Math.floor(Math.random()*specialCharacter.length)])
  }

  //Generate random password with user specifications
  var randomPassword = []

  for (var i = 0; i < (userLength - random.length); i++) {
    randomPassword.push(userSpecs[Math.floor(Math.random()*userSpecs.length)])
  }

  //Add the array with one of each user specification to randomly generated password array
  randomPassword = randomPassword.concat(random)

  //Turn randomPassword array into string
  randomPassword = randomPassword.join("")
  
  //Spit out randomPassword
  console.log(randomPassword)
  return randomPassword

}


// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);