/* In this challenge, you’ll write a decoder.

Write a function that takes in a string and returns a string. A valid argument is a number followed by a sequence of letters. Ex. 2fcjjm

The number in the string represents how many characters each letter should shift. For example:

>>> "1a" // "b"
>>> "3ce" // "fh"
>>> "2fcjjm" // "hello"
*/
function decodeString(code) {
    let number;
    if (+code[0]) {
        number = +code[0];
    } else {
        return "Invalid code.";
    }

    const messageChars = [];
    for (let i = 1; i < code.length; i++) {
        let newCharCode = code[i].charCodeAt(0) + number;
        if (newCharCode > 122) {
            newCharCode -= 26;
        }
        messageChars.push(String.fromCharCode(newCharCode));
    }

    const message = messageChars.join('');
    return message;
}

console.log(decodeString('1a')); // b
console.log(decodeString('3ce')); // fh
console.log(decodeString("2fcjjm")); // hello
console.log(decodeString('2y')); // a

// *------------*

function decoder(string) {
    answer = ""; // initializing the answer string to return from this function later
    let shiftNumber = 0; //temporary assign to 0, but will change value based on the 1st char in the string
  
    for (let i = 0; i < string.length; i++) {
      // for each index char, if it IS a number, convert it from string-> integer and assign it to shiftNumber
      if (!isNaN(string[i])) {
        shiftNumber = parseInt(string[i]);
        // if it IS NOT a number:
        // pass the index as a parameter into charCodeat() string method which returns an integer representing the UTF-16 code unit at the given index.
        // add shiftNumber value to this number to get the new character code.
        // and pass this character code as an argument to fromCharCode() string method which returns a string created from the specified sequence of UTF-16 code units.
      } else {
        // find index of each letter, shift the character and add to to the answer string
        const shiftedChar = String.fromCharCode(
          string.charCodeAt(i) + shiftNumber
        );
        answer += shiftedChar; // save each shifted character to answer string.
      }
    }
    return answer;
  }
  
  console.log(decoder("1a")); // 'b'
  console.log(decoder("3ce")); // 'fh'
  console.log(decoder("2ycjjm")); // 'hello' 