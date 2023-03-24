import CalculatorController from "./controller/controller";

const controller = new CalculatorController();

let num1: number, num2: number, operator: string;

process.stdout.write("Enter num1: ");
process.stdin.once("data", (data) => {
  num1 = parseFloat(data.toString().trim());
  console.log(num1);

  process.stdout.write("Enter num2: ");
  process.stdin.once("data", (data) => {
    num2 = parseFloat(data.toString().trim());
    console.log(num2);

    process.stdout.write("Enter operator: ");
    process.stdin.once("data", (data) => {
      operator = data.toString().trim();

      controller.calculate(num1, num2, operator);

      process.exit();
    });
  });
});
