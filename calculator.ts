import CalculatorController from "./controller/controller";

const controller = new CalculatorController();

let argv = process.argv.slice(2)

const num1 = parseFloat(argv[0]);
const num2 = parseFloat(argv[1]);
const operator = argv[2];


controller.calculate(num1, num2, operator);