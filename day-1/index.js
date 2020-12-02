let input = require("./input");

// Part 1
let matched = false;
for (i = 0; i < input.length; i++) {
    for (j = 0; j < input.length; j++) {
        if (input[i] + input[j] == 2020) {
            matched = true;
            console.log(`Two numbers product is ${input[i] * input[j]}`);
        }
        if (matched) {
            break;
        }
    }
    if (matched) {
        break;
    }
}

// Part 2
for (i = 0; i < input.length; i++) {
    for (j = 0; j < input.length; j++) {
        for (k = 0; k < input.length; k++) {
            if (input[i] + input[j] + input[k] == 2020) {
                console.log(
                    `Three numbers product is ${input[i] * input[j] * input[k]}`
                );
                return;
            }
        }
    }
}
