// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];



// Function to prompt user for password options
function getPasswordOptions() {

//we should write prompt twice. 1-when the condition is true. 2-when the condition is not true and need to reenter the number of password character a gain. 
  var passwordLength = prompt("How many characters would you like to have in your password?");

  var min = 8;
  var max = 129;
  
// We should use "While" instead of  "If" because the user can move to the next step only when the condition is confirmed.
    while (passwordLength<min || passwordLength>max ) {
      alert("Password should have minimum 8 and maximum 128 characters.");
      passwordLength = prompt("How many characters would you like to have in your password?");
  }
   
  
  var special = confirm("Press OK if you would like your password have special character.");
  var numeric = confirm("Press OK if you would like your password have numeric character.");
  var lowerCase = confirm("Press OK if you would like your password have lowercase character.");
  var upperCase = confirm("Press OK if you would like your password have uppercase character.");
  
  return [passwordLength,special,numeric,lowerCase,upperCase];

  }

  
// Function for getting a random element from an array
function getRandom(arrayCollection) {
 
var x = Math.random(); // generate a random number between 0 and 1("x" is decimal number).
var y = x * arrayCollection.length; //"y" use Math.random to make the random password according to the number of characters that user entered in first step. the password length is between 0 and array length.(but "y" is still decimal).
var randomIndex = Math.floor(y); // we should use Math.floor to change decimal number to integer.

var PasswordCharacter = arrayCollection[randomIndex];
return PasswordCharacter;

}


// Function to generate password with user input
function generatePassword() {

  //returned arrays.
 var [passwordLength,special,numeric,lowerCase,upperCase] = getPasswordOptions();
 console.log(passwordLength,special,numeric,lowerCase,upperCase);
 
 // .concat () can merge arrays.
 var arrayCollection =[];
 if (special) {
  arrayCollection = arrayCollection.concat(specialCharacters);
 }
 if (numeric) {
  arrayCollection = arrayCollection.concat(numericCharacters);
 }
 if (lowerCase) {
  arrayCollection = arrayCollection.concat(lowerCasedCharacters);
 }
 if (upperCase) {
  arrayCollection = arrayCollection.concat(upperCasedCharacters);
 }

//  console.log(arrayCollection);
 var password =[];

 for (var index = 0; index < passwordLength; index++) {
  var PassCharacter = getRandom(arrayCollection);
  password = password.concat(PassCharacter);
  // console.log(PassCharacter);
 }
// console.log(password);
password = password.join("");
return password;
}



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
 
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);