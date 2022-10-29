
// list password variables/arrays
//How do we assign these values???? FOR loop??
//How do I VALIDATE my INPUT for one type minimum??


// click generate password THEN WINDOW.PROMPT to select length and filter wrong responses
function generatePassword() {

  //Assigns input to  userChoice
  var userChoice = window.prompt ("Choose a charachter length between 8 - 128") 

    // create IF statements that filter the user choice
    if (userChoice < 8 || userChoice > 128) { 
      alert("Please choose a number in range between 8 and 128")
      return generatePassword()} // restarts function after invalid choice

    else if (isNaN(userChoice)) { 
      alert ("That is not a number. Please enter a valid choice, ")
      return generatePassword()}

    
    
    // Need CONFIRM statements for each category
  var lowerChoice = window.confirm ("Do you want to include lower case?")
  var upperChoice = window.confirm ("Do you want to include upper case?")
  var numberChoice = window.confirm ("Do you want to include numbers?")
  var specialChoice = window.confirm ("Do you want to include special?")

//create base arrays for each category then empty array for all category choices
var lower = ["a", "b", "c", "d","e", "f", "g", "h","i", "j", "k", "l","m", "n", "o", "p","q", "r", "s", "t","u", "v", "w", "x","y", "z"];
var upper = ["A", "B", "C", "D","E", "F", "G", "H","I", "J", "K", "L","M", "N", "O", "P","Q", "R", "S", "T","U", "V", "W", "X","Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$","%", "^", "&", "*","(", ")", "?"];
var superList = []

//Find a way to create a combined list
// Each PUSH will add an array to the open superListarray

  if (lowerChoice) {superList.push(lower)}

  if (upperChoice) {superList.push(upper)}

  if (numberChoice) {superList.push(number)}

  if (specialChoice) {superList.push(special)};

  if (!lowerChoice && !upperChoice && !numberChoice && !specialChoice) {

    alert("You must choose at least one category.")
    return;
  }


  //Convert to single huge array
  var superMerge = superList.flat(1);

 

  // pick random numbers with length based on userChoice


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







