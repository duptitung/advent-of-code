// Work in progress

fs = require("fs");
input = fs.readFileSync("./input.txt", "utf8");

let rows = 64;
let count = 64;

let lowerLimit = 0,
    upperLimit = 127;

for (i = 0; i < input.length; i++) {
    if (rows > 1) {
        rows = rows / 2;
        // count += rows;
        // console.log(rows);

        if (input[i] == "F") {
            count = count - rows;
        }
        if (input[i] == "B") {
            count = count + rows;
        }
    }
    console.log(count);
}

// console.log(input);
