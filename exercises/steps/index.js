// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  let counter = n;
  let step = '#';
  for (let i = 0; i < n; i++) {
    let tempStep = step;
    while (tempStep.length < n) {
      tempStep += ' ';
    }
    console.log(tempStep);
    step += '#';
  }
}

module.exports = steps;
