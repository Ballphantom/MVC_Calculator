class CalculatorModel {
    private num1: number;
    private num2: number;
    private operator: string;
  
    constructor() { //เรียกใช้ object จาก CalculatorModel
      this.num1 = 0;
      this.num2 = 0;
      this.operator = "";
    }
  
    setNum1(num: number) {
      this.num1 = num;
    }
  
    setNum2(num: number) {
      this.num2 = num;
    }
  
    setOperator(operator: string) {
      this.operator = operator;
    }
  
    getResult() {
      switch (this.operator) {
        case "+":
          return this.num1 + this.num2;
        case "-":
          return this.num1 - this.num2;
        case "*":
          return this.num1 * this.num2;
        case "/":
          return this.num1 / this.num2;
        default:
          return 0;
      }
    }
  }
  
  export default CalculatorModel;