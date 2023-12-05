import fs from "fs";

const numbers = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function getFileLines() {
  const file = fs.readFileSync("./input.txt", { encoding: "utf-8" });
  return file.split("\n");
}

function checkIfIsNumber(i: string) {
  return !Number.isNaN(Number.parseInt(i, 10));
}

function findAllNumbers(input: string) {
  const foundNumbers: {
    index: number;
    value: string;
  }[] = [];

  for (let i = 0; i < input.length; i++) {
    if (checkIfIsNumber(input[i])) {
      foundNumbers.push({
        index: i,
        value: input[i],
      });
    }
  }

  numbers.forEach((number) => {
    let index = input.indexOf(number);
    // catch all occurrences of that number
    while (index !== -1) {
      foundNumbers.push({
        index: index,
        value: String(numbers.indexOf(number) + 1),
      });
      index = input.indexOf(number, index + 1);
    }
  });

  foundNumbers.sort((a, b) => a.index - b.index);

  return +`${foundNumbers[0].value}${
    foundNumbers[foundNumbers.length - 1].value
  }`;
}

const lines = getFileLines();
const sum = lines.map(findAllNumbers).reduce((sum, val) => sum + val, 0);

console.log(sum);
