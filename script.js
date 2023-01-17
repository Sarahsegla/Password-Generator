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
  //alert("This is a password generator")
  function getPasswordOptions() {
    alert("This is a password generator")
 let passwordGen = prompt("Password generator will create a password that will be 10 - 64 characters lowercase uppercase numeric and include special characters");
  alert(passwordGen);

 return ;
};
 
  
  // Function for getting a random element from an array
  function getRandom(specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters) {

    const ranIndex =  Math.floor(Math.random() * getRandom.length);

    const item = getRandom[ranIndex];

    return item;


// const characters = [specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters]
//     var passwordlen = 10;
    

//     for ( var i = 0; i <= passwordlen; i++) {
//       var ranNum = Math.floor(Math.random() * getRandom.length);
//       passW += getRandom (ranNum, ranNum +1);
//     };
//     var passW = "";
//    return passW;
 };

  //const result = getRandom(specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters)
  
console.log();

  // Function to generate password with user input
  function generatePassword() {
    console.log("test my button");

    return "test generated password"
  
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