import CalculatorController from "./controller/controller";

const controller = new CalculatorController();

const num1 = parseFloat(process.argv[2]);
const num2 = parseFloat(process.argv[3]);
const operator = process.argv[4];

controller.calculate(num1, num2, operator);