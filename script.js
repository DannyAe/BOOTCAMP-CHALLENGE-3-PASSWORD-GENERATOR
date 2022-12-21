// Assignment Code

var generateBtn = document.querySelector("#generate");

var lowerStr = "abcdefghijklmnopqrstuvwxyz"
var lowerArr = lowerStr.split("")
// to see this is working console.log (lowerArr)

var upperArr = lowerStr.toUpperCase().split("")
// console.log (upperArr)

var numArr  = [0,1,2,3,4,5,6,7,8,9]

var specialArr = "!@#$%^&*".split ("")
console.log (specialArr)



function generatePassword () { 
// ask user for password length

var passwordLen = window.prompt("How long?")
var totalArr = []
if(confirm(yes)){
totalArr = totalArr.concat(lowerArr)


}
// ask user what type of characters 
// use for loop to create N number of random characters

return "password"
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
