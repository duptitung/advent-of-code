const input = require("./input");
console.log(input[0].length);

// Part 1
let counter = 3;
let noOfTree = 0;

for (let i = 1; i < input.length; i++) {
    if (input[i].charAt(counter) === "#") {
        noOfTree += 1;
    }
    counter += 3;
    if (counter > 30) {
        counter = counter - 31;
    }
}
console.log(noOfTree);

// Part 2
let paths = [
    { right: 1, down: 1 },
    { right: 3, down: 1 },
    { right: 5, down: 1 },
    { right: 7, down: 1 },
    { right: 1, down: 2 },
];
const treesArr = paths.map((path) => {
    let counter2 = path.right;
    let noOfTrees2 = 0;
    for (let i = path.down; i < input.length; i += path.down) {
        if (input[i].charAt(counter2) === "#") {
            noOfTrees2 += 1;
        }
        counter2 += path.right;
        if (counter2 > 30) {
            counter2 = counter2 - 31;
        }
    }
    return noOfTrees2;
});

console.log(treesArr.reduce((a, b) => a * b));
