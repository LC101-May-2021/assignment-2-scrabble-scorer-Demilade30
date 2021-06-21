// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   let word1 = input.question("Enter a word to score: ");
   return word1;
};

let simpleScore = function(word) {
  return word.length;
};

let vowelBonusScore = function(word) {
  let letterPoints = 0;
  let strings = 'aeiou';
    
    for(i=0;i<word.length;i++) {
      if (strings.includes(word[i].toLowerCase())) {
        letterPoints = letterPoints+3;
      }
      else {
        letterPoints++;
      }  
    }
    return letterPoints;
};

let scrabbleScore = function(word) {
  let letterPoints = 0;
  for (let i = 0; i < word.length; i++) {
			letterPoints += newPointStructure[word[i]];
	}
	return letterPoints;
}

const scoringAlgorithms = [
  {
    Name: 'Simple Score',
    Description: 'Each letter is worth 1 point.',
    ScoringFunction: simpleScore
  },
  {
    Name: 'Bonus Vowels',
    Description: 'Vowels are 3 pts, consonants are 1 pt.',
    ScoringFunction: vowelBonusScore
  },
  {
    Name: 'Scrabble',
    Description: 'The traditional scoring algorithm.',
    ScoringFunction: scrabbleScore
  },
];

function scorerPrompt() {
  console.log("What scoring algorithm would you like to use? ");
  for(let i=0;i<scoringAlgorithms.length;i++) {
    let choice=scoringAlgorithms[i];
    console.log(i+"-"+choice.name+choice.description);
  }
  let inq=input.question("Choose a number between 0, 1 or 2: ");
  return scoringAlgorithms[inq];
}

function transform(oldStructure) {
  const swapValue = {}
  for (let result in oldStructure) {
    let value = oldStructure[result];
  
  for (let i=0;i<value.length;i++) {
    value1 = value[i].toLowerCase();
    console.log(value1);
    swapValue[value1] = Number(result);
  }
  }
  return swapValue;
};

let newPointStructure = transform(oldPointStructure);
console.log(newPointStructure);

function runProgram() {
   let word = initialPrompt();
   let chosenAlgorithm = scorerPrompt();
   let score = chosenAlgorithm.ScoringFunction(word);

   console.log("The score for ${word} is ${score}");
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

