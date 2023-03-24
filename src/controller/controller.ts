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
    this.model.setNum1(num1);
    this.model.setNum2(num2);
    this.model.setOperator(operator);

    const result = this.model.getResult();

    this.view.displayResult(num1,operator,num2,result);
  }
}

export default CalculatorController;