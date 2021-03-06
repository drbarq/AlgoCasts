// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //   let strArr = str.split("");
  //   let reverseStr = [];

  //   if (str.length < 1) {
  //     return str;
  //   }

  //   return str.split("").reverse().join("");

  //   for (i = str.length - 1; i >= 0; i--) {
  //     reverseStr.push(strArr[i]);
  //   }

  //   return reverseStr.join("");

  let reversed = "";
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

module.exports = reverse;
