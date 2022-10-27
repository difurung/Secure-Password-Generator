// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// list password variables/arrays
lower = ["a", "b", "c", "d","e", "f", "g", "h","i", "j", "k", "l","m", "n", "o", "p","q", "r", "s", "t","u", "v", "w", "x","y", "z"];
upper = ["A", "B", "C", "D","E", "F", "G", "H","I", "J", "K", "L","M", "N", "O", "P","Q", "R", "S", "T","U", "V", "W", "X","Y", "Z"];
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
special = ["!", "@", "#", "$","%", "^", "&", "*","(", ")", "?"];
//super = ["2"]
//How do we assign these values???? FOR loop??
//How do I VALIDATE my INPUT for one type minimum??

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



// click generate password THEN PROMPT to select length
function generatePassword() {
  var userChoice = window.prompt ("Choose a charachter length between 8 - 128") 
    
    if (userChoice < 8 || userChoice > 128) { alert("please choose a number within range")}
  }

    
      
  



    // if (userChoice < 8 && userChoice > 128) { "Please choose a number between 8 and 18"}
  

// TF length !=== interger THEN alert "must be an interger"

// ELSE TF length !===between 8 and 129 THEN Prompt
// ELSE"must choose between 8 - 129 charachters"




//CONFIRM "would you like to include lowercase letters"
  // IF true then CONFIRM and assign ELSE "???"

//CONFIRM "would you like to include upperrcase letters"
  // IF true then CONFIRM and assign  ELSE "???"

//CONFIRM "would you like to include numbers"
  // IF true then CONFIRM and assign ELSE "???"

//CONFIRM "would you like to special charachters"
  // IF true then CONFIRM and assign ELSE "???"





// generate random password based on arrays
  //IF include upper is true then PUSH
  //IF include lower is true then PUSH
  //IF include number is true then PUSH
  //IF include special is true then PUSH
