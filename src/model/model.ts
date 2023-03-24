class CalculatorModel {
    private num1: number;
    private num2: number;
    private operator: string;
  
    constructor() { 
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

    add(): number {
      return this.num1 + this.num2;
    }
  
    substract(): number {
      return this.num1 - this.num2;
    }
  
    multiply(): number {
      return this.num1 * this.num2;
    }
  
    division(): number {
      return this.num1 / this.num2;
    }
  }
  
  export default CalculatorModel;