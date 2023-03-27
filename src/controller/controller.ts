import CalculatorModel from "../model/model";
import CalculatorView from "../view/view";

class CalculatorController {
  private model: CalculatorModel;
  private view: CalculatorView;

  constructor() {
    this.model = new CalculatorModel();
    this.view = new CalculatorView();
  }

  calculate(num1: number, num2: number, operator: string) {
    let result = 0;
    this.model.setNum1(num1)
    this.model.setNum2(num2);
    this.model.setOperator(operator);
    
    switch (operator) {
      case "+":  
         /*this.view.displayResult(this.model.add())*/
         result = this.model.add()
         break;
      case "-":
         /*this.view.displayResult(this.model.substract())*/
         result = this.model.substract()
         break;
      case "*":
         /*this.view.displayResult(this.model.multiply())*/
         result = this.model.multiply()
         break;
      case "/":
         /*this.view.displayResult(this.model.division())*/
         result = this.model.division()
         break;
    } 
    
    
  }
}

export default CalculatorController;

