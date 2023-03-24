import CalculatorController from "./controller/controller";
import * as readline from "readline";

const controller = new CalculatorController();

let num1: number, num2: number, operator: string;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter num1: ", (answer) => {
  num1 = parseFloat(answer);

  rl.question("Enter num2: ", (answer) => {
    num2 = parseFloat(answer);

    rl.question("Enter operator: ", (answer) => {
      operator = answer;

      controller.calculate(num1, num2, operator);

      rl.close();
    });
  });
});
