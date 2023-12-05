import fs from "fs";

function getFileLines() {
  const file = fs.readFileSync("./input.txt", { encoding: "utf-8" });
  return file.split("\n");
}

function checkIfIsNumber(i: string) {
  return !Number.isNaN(Number.parseInt(i, 10));
}

function getLineCalibrationValue(input: string) {
  let calibrationValue = "";

  for (let i = 0; i < input.length; i++) {
    if (checkIfIsNumber(input[i])) {
      calibrationValue = input[i];
      break;
    }
  }

  for (let i = input.length - 1; i >= 0; i--) {
    if (checkIfIsNumber(input[i])) {
      calibrationValue += input[i];
      break;
    }
  }

  return +calibrationValue;
}

const lines = getFileLines();
const sum = lines
  .map(getLineCalibrationValue)
  .reduce((sum, val) => sum + val, 0);

console.log(sum);
