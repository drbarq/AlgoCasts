// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// OPTION 2 - compare all characters via cleaned strings
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(string) {
  return string.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

// OPTION 1 - we iterate through the strings multiple times
// function anagrams(stringA, stringB) {
//   let aMap = createMap(stringA);
//   let bMap = createMap(stringB);

//   if (Object.keys(aMap).length !== Object.keys(bMap).length) {
//     //   if they have a different length they cant be anagram
//     return false;
//   }

//   //   iterate through and compare the maps
//   for (let char in aMap) {
//     if (aMap[char] !== bMap[char]) {
//       return false;
//     }
//   }
//   return true;
// }

// function createMap(string) {
//   let charMap = {};
//   let cleanedStr = string.replace(/[^\w]/g, "").toLowerCase();

//   for (let char of cleanedStr) {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   }

//   return charMap;
// }

// my solution
// function anagrams(stringA, stringB) {
//   let aMap = {};
//   let bMap = {};

//   let aArr = stringA.toLowerCase().split("");
//   let bArr = stringB.toLowerCase().split("");
//   //   let aArr = stringA.replace(/[^\w]/g, "").toLoweCase().split("");
//   //   let bArr = stringB.replace(/[^\w]/g, "").toLowerCase().split("");

//   aArr.forEach((char) => {
//     if (
//       char === " " ||
//       char === "!" ||
//       char === "." ||
//       char === "?" ||
//       char === ","
//     ) {
//       return;
//     }
//     if (aMap[char]) {
//       aMap[char]++;
//     } else {
//       aMap[char] = 1;
//     }
//   });

//   bArr.forEach((char) => {
//     if (
//       char === " " ||
//       char === "!" ||
//       char === "." ||
//       char === "?" ||
//       char === ","
//     ) {
//       return;
//     }

//     if (bMap[char]) {
//       bMap[char]++;
//     } else {
//       bMap[char] = 1;
//     }
//   });

//   //   console.log(aMap, "aMap");
//   //   console.log(bMap, "bMap");

//   if (Object.keys(aMap) > Object.keys(bMap)) {
//     // for (let char in aMap) {
//     //   if (aMap[char] === bMap[char]) {
//     //     return true;
//     //   } else {
//     //     return false;
//     //   }
//     // }

//     Object.keys(aMap).forEach((char) => {
//       if (aMap[char] !== bMap[char]) {
//         console.log(char, "char");
//         console.log(aMap[char], "aMap[char]");
//         return false;
//       }
//     });

//     return true;
//   } else {
//     console.log(Object.keys(aMap), "aMap");
//     console.log(Object.keys(bMap), "bmap");

//     Object.keys(bMap).forEach((char) => {
//       if (bMap[char] !== aMap[char]) {
//         return false;
//       }
//     });

//     return true;

//     // for (let char in bMap) {
//     //   if (bMap[char] === aMap[char]) {
//     //     console.log("char", char);
//     //     return true;
//     //   } else {
//     //     return false;
//     //   }
//     // }
//   }

//   //   for (let char in longerMap) {
//   //     console.log(longerMap, "longermap");

//   //     if (longerMap[char] === !longerMap[char]) {
//   //       console.log(longerMap, "longermap");
//   //       //   console.log(aMap, "aMap", stringA);
//   //       //   console.log(bMap, "bMap", stringB);
//   //       return true;
//   //     } else {
//   //       return false;
//   //     }
//   //     // console.log(char, "char");
//   //   }

//   //   return aMap == bMap;
// }

module.exports = anagrams;
