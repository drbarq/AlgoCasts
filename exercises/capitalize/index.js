// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const words = [];

  for (let word of str.split(" ")) {
    const uppserWord = word[0].toUpperCase() + word.slice(1);
    words.push(uppserWord);
  }
  return words.join(" ");
}

// function capitalize(str) {
//   let finishedSentence = [];

//   let sentenceArr = str.split(" ");

//   console.log(sentenceArr);

//   for (let i = 0; i <= sentenceArr.length; i++) {
//     let upperCaseLetter = sentenceArr[i][0].toUpperCase();

//     let uppercaseWord = upperCaseLetter + sentenceArr[i].slice(1);

//     console.log(uppercaseWord);
//     finishedSentence.push(uppercaseWord);
//     // finishedSentence = finishedSentence + " " + uppercaseWord;
//     console.log(finishedSentence);
//   }

//   console.log("hello");
//   console.log(finishedSentence);

//   return finishedSentence;
// }

module.exports = capitalize;
