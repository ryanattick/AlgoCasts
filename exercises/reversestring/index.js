// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // return str.split('').reverse().join('');
            // let strArr = str.split('');
            // let counter = 1;
            // while (counter < strArr.length) {
            //   let temp = strArr[0];
            //   strArr.shift();
            //   strArr.splice(strArr.length - counter, 0, temp);
            //   counter++;
            // }
            // let temp = strArr[strArr.length - 1];
            // strArr.pop();
            // strArr.unshift(temp);
            // return strArr.join('');
    // let reversed = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //   reversed += str[i];
    // }
    // return reversed;
            return str.split('').reduce((acc, char) => {
             return acc = char + acc;
            }, '')
}

module.exports = reverse;
