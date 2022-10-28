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
//How do we assign these values???? FOR loop??
//How do I VALIDATE my INPUT for one type minimum??


// click generate password THEN WINDOW.PROMPT to select length and filter wrong responses
function generatePassword() {
  var userChoice = window.prompt ("Choose a charachter length between 8 - 128") 

  var interger = isNaN(userChoice)
    // create IF statements that filter the user choice
    if (userChoice < 8 || userChoice > 128) { 
      alert("Please choose a number within range")
      return generatePassword()} // restarts function after invalid choice

    else if (interger == true) { 
      alert ("Please make a valid choice")
      return generatePassword()}

    
    
    // Need CONFIRM statements for each categoryu
  var lowerChoice = window.confirm ("Do you want to include lower case?")
  var upperChoice = window.confirm ("Do you want to include upper case?")
  var numberChoice = window.confirm ("Do you want to include numbers?")
  var specialChoice = window.confirm ("Do you want to include special?")

//create base arrays for each category
var lower = ["a", "b", "c", "d","e", "f", "g", "h","i", "j", "k", "l","m", "n", "o", "p","q", "r", "s", "t","u", "v", "w", "x","y", "z"];
var upper = ["A", "B", "C", "D","E", "F", "G", "H","I", "J", "K", "L","M", "N", "O", "P","Q", "R", "S", "T","U", "V", "W", "X","Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$","%", "^", "&", "*","(", ")", "?"];
var superList = []

//Find a way to create a combined list
// Each PUSH will add an array to the open array

  if (lowerChoice) {superList.push(lower)}

  if (upperChoice) {superList.push(upper)}

  if (numberChoice) {superList.push(number)}

  if (specialChoice) {superList.push(special)};


  //Convert to single huge array
  var superMerge = superList.flat(1);

  console.log(superMerge)

  // pick random numbers with length based on userChoice

  // for (let i = 0; i < userChoice.length; i++)
  //    var index = Math.floor(Math.random() * superList.length);
  
  //console.log(index)
let password = " ";

for (let i = 0; i < userChoice; i++) 
{
  var prime = Math.floor(Math.random() * superMerge.length);
 
  password += superMerge[prime];

  console.log(password)
  
  
}
return password;



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







