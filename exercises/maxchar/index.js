// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   let chars = {};
//   let max = 0;
//   let maxChar = "";

//   for (let char of str) {
//     // !chars[char] ? (chars[char] = 1) : chars[char]++;
//     // chars[char] = chars[char] + 1 || 1;
//     if (!chars[char]) {
//       chars[char] = 1;
//     } else {
//       chars[char]++;
//     }
//   }

//   for (let char in chars) {
//     if (chars[char] > max) {
//       max = chars[char];
//       maxChar = char;
//     }
//   }

//   return maxChar;
// }

function maxChar(str) {
  let strArr = str.split("");

  let max = 0;
  let maxChar = "";
  let charMap = {};

  strArr.forEach((char) => {
    if (charMap[char]) {
      charMap[char] = charMap[char] + 1;
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });

  for (char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  //   console.log(charMap, "charmap");
  return maxChar;
}

module.exports = maxChar;
