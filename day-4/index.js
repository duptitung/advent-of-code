fs = require("fs");
inputRaw = fs.readFileSync("./input.txt", "utf8");
data = inputRaw.replace(/\n/g, " ").split("  ");

let validPassports = 0;
let validPassports2 = 0;

// Function for solution 2
const checkValid = (fields) => {
    let counter = 0; // Count valid fields, increase counter by 1 if valid
    for (let i = 0; i < fields.length; i++) {
        let code = fields[i].split(":");
        switch (code[0]) {
            case "byr":
                if (code[1] >= 1920 && code[1] <= 2002) {
                    counter += 1;
                }
                break;
            case "iyr":
                if (code[1] >= 2010 && code[1] <= 2020) {
                    counter += 1;
                }
                break;
            case "eyr":
                if (code[1] >= 2020 && code[1] <= 2030) {
                    counter += 1;
                }
                break;
            case "hgt":
                let unit = code[1].slice(-2);
                if (unit == "in" || unit == "cm") {
                    let height = code[1].match(/[^\d]+|\d+/g); // Separate unit and number
                    if (
                        height[1] == "cm" &&
                        height[0] >= 150 &&
                        height[0] <= 193
                    ) {
                        counter += 1;
                    } else {
                        if (
                            height[1] == "in" &&
                            height[0] >= 59 &&
                            height[0] <= 76
                        ) {
                            counter += 1;
                        }
                    }
                }
                break;
            case "hcl":
                if (
                    code[1].startsWith("#") &&
                    code[1].length == 7 &&
                    code[1].match(/^#[0-9A-F]{6}$/i)
                ) {
                    counter += 1;
                }
                break;
            case "ecl":
                if (
                    code[1] == "amb" ||
                    code[1] == "blu" ||
                    code[1] == "brn" ||
                    code[1] == "gry" ||
                    code[1] == "grn" ||
                    code[1] == "hzl" ||
                    code[1] == "oth"
                ) {
                    counter += 1;
                }
                break;
            case "pid":
                if (code[1].length == 9) {
                    counter += 1;
                }
                break;
            default:
                break;
        }
    }

    if (counter == 7) {
        validPassports2 += 1;
    }
};

for (let i = 0; i < data.length; i++) {
    let fields = data[i].split(" ");

    // Check if all 8 fields are present
    if (fields.length == 8) {
        validPassports += 1;

        // For second part
        checkValid(fields);
    } else {
        // If only 7 fields are present, check if all fields are present except "cid" which is optional
        if (fields.length == 7) {
            let tempCount = 0;
            for (let j = 0; j < fields.length; j++) {
                // if (fields[j].substring(0, 3) != "cid") {
                //     tempCount += 1;
                // }
                let code = fields[j].split(":");
                if (code[0] != "cid") {
                    tempCount += 1;
                }
            }
            if (tempCount == 7) {
                validPassports += 1;

                // For second part
                checkValid(fields);
            }
        }
    }
}

console.log("Part one valid passport:" + validPassports);
console.log("Part one valid passport:" + validPassports2);
