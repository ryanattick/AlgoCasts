// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
 // return str.split(' ').map((word) => {
 //  word = word.split('');
 //  word[0] = word[0].toUpperCase();
 //  return word.join('');
 //  }).join(' '); //This one is better (I think) and I came up with it first !
 let capitalized = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i - 1] === ' ' || str[i - 1] === undefined) {
      capitalized += str[i].toUpperCase();
    } else {
      capitalized += str[i];
    }
  }
  return capitalized;
}

module.exports = capitalize;
