// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function anagrams(stringA, stringB) {
  // let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  // function convertToObj(string) {
  //   let obj = {};
  //   string = string.split('').sort().join('').toLowerCase(); //this actually is the solution, no need to map to an object
  //   for (let char of string) {
  //     if (alphabet.includes(char)) {
  //       obj[char] = obj[char] + 1 || 1;
  //     }
  //   }
  //   return obj;
  // }
  // let strA = convertToObj(stringA);
  // let strB = convertToObj(stringB);
  // return JSON.stringify(strA) === JSON.stringify(strB);

  return stringA.replace(/[^\w]/g, '')
      .split('')
      .sort()
      .join('')
      .toLowerCase()
      ===
      stringB.replace(/[^\w]/g, '')
      .split('')
      .sort()
      .join('')
      .toLowerCase();
}

module.exports = anagrams;
