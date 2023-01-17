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

  let charactersLen = []
  let arrOption = []
  
  
  // Function to prompt user for password options
  //alert("This is a password generator")
  function getPasswordOptions() {
   charactersLen = parseInt (prompt("Password has a minimum of 10 characters and maximum of 64 characters"));
   if (isNaN(charactersLen), charactersLen < 10, charactersLen > 64 ) {
    alert ("Password must be minimum of (10) characters and maximum of (64) characters ");
    return false;
   }
   if (prompt ("Must have special characters like symbols")) {
    arrOption = arrOption.concat(specialCharacters);
   }
   if (prompt ("Must have upper case characters")) {
    arrOption = arrOption.concat(upperCasedCharacters);
   }
   if (prompt ("Must have lower case characters")) {
    arrOption = arrOption.concat(lowerCasedCharacters);
   }
   if (prompt ("Must have numbers")) {
    arrOption = arrOption.concat(numericCharacters);
   }
   return true;
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