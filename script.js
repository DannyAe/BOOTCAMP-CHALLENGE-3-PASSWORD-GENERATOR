// CREATE VARIABLES AND CHARACTER SETS - THIS IS WHAT WE WILL USE TO POPULATE PASSWORD
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*(){}[]<>?|/|";
var userSelection = "";
var finalPassword = "";


// CREATE A VARIABLE FOR THE #GENERATE FUNCTION
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  
  // CLEAR userSelection VAR FOR EACH NEW PASSWORD
   
  var userSelection = "";
  

    // CREATE PASSWORD LENGTH
    passwordLength = prompt("Please enter a password length between 8 and 128 characters.");
      if (!passwordLength) {
        alert("You must provide a value!")
        return generatePassword();
      } else if (passwordLength < 8)  {
        alert("Password must be at least 8 characters in length")
        return generatePassword();
      } else if (passwordLength > 128) {
        alert("Password cannot exceed 128 characters in length")
        return generatePassword();
      }

    // CHOOSE AND GENERATE CHARACTER TYPE
    lowerCharConfirm = confirm("Would you like to include lowercase letters in your password?");
      if (lowerCharConfirm) {
        userSelection += lowerChar
      };
      console.log(lowerCharConfirm);
      console.log(userSelection);

    upperCharConfirm = confirm("Would you like to include uppercase letters in your password?");
      if (upperCharConfirm) {
        userSelection += upperChar
      };
      console.log(upperCharConfirm);
      console.log(userSelection);

    numberCharConfirm = confirm("Would you like to include numbers in your password?");
      if (numberCharConfirm) {
        userSelection += numberChar
      };
      console.log(numberCharConfirm);
      console.log(userSelection);

      specialCharConfirm = confirm("Would you like to include special characters in your password?");
        if (specialCharConfirm) {
          userSelection += specialChar
        };
        console.log(specialCharConfirm);
        console.log(userSelection);

      // PROMPT IF NO CHARACTER SET WAS SELECTED
      if (lowerCharConfirm === false &&  upperCharConfirm === false &&  numberCharConfirm === false &&  specialCharConfirm === false) {
          alert("You must select at least one character type!")
          generatePassword()
      };
      
    // GENERATE RANDOM PASSWORD BASED ON USERS PREFERENCES
    finalPassword = ""
    for (var i = 0; i < passwordLength; i++) {
      finalPassword += userSelection.charAt(Math.floor(Math.random() * userSelection.length))
    }
      
    return finalPassword
  }

// SEND PASSWORD TO #PASSWORD INPUT BOX
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
