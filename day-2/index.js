let input = require("./input");

let validPassword = 0;
let partTwoValidPassword = 0;

for (let i = 0; i < input.length; i++) {
    let inputSplit = input[i].split(" ");
    let limit = inputSplit[0].split("-");
    let upperLimit = limit[1];
    let lowerLimit = limit[0];
    let lowerPosition = lowerLimit - 1;
    let upperPosition = upperLimit - 1;
    let target = inputSplit[1].slice(0, -1);
    let word = inputSplit[2];
    countLetter(
        word,
        target,
        lowerLimit,
        upperLimit,
        lowerPosition,
        upperPosition
    );
}

function countLetter(
    word,
    target,
    lowerLimit,
    upperLimit,
    lowerPosition,
    upperPosition
) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] == target) {
            count += 1;
        }
    }

    if (count >= lowerLimit && count <= upperLimit) {
        validPassword += 1;
    }

    // Part 2
    if (
        (word[lowerPosition] === target && word[upperPosition] !== target) ||
        (word[lowerPosition] !== target && word[upperPosition] === target)
    ) {
        partTwoValidPassword += 1;
    }
}

console.log(`valid passwords: ${validPassword}`);
console.log(`Part two valid passwords: ${partTwoValidPassword}`);
