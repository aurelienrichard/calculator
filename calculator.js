class Calculator {
  constructor(previousOperandElement, currentOperandElement) {
    this.previousOperandElement = previousOperandElement;
    this.currentOperandElement = currentOperandElement;
    this.clear();
  }

  clear() {
    this.previousOperand = '';
    this.currentOperand = '';
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.slice(0, -1);
  }

  append(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.concat(number);
  }

  setOperation(operation) {
    if (this.currentOperand === '') {
      this.operation = operation;
      return;
    }
    if (this.previousOperant !== '') this.compute();
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {
    let computation;
    const prev = Number(this.previousOperand);
    const curr = Number(this.currentOperand);

    if (Number.isNaN(prev) || Number.isNaN(curr)) return;
    switch (this.operation) {
      case '+':
        computation = prev + curr;
        break;
      case '-':
        computation = prev - curr;
        break;
      case '*':
        computation = prev * curr;
        break;
      case '/':
        computation = prev / curr;
        break;
      default:
        return;
    }

    this.currentOperand = String(computation);
    this.operation = undefined;
    this.previousOperand = '';
  }

  sign() {
    this.currentOperand = String(-this.currentOperand);
  }

  format() {
    const strResult = this.currentOperand;
    const integerDigits = Number(strResult.split('.')[0]);
    const decimalDigits = Number(strResult.split('.')[1]);
    let integerDisplay;
    if (Number.isNaN(integerDigits)) integerDisplay = '';
    else {
      integerDisplay = integerDigits.toLocaleString('en', {
        maximumFractionDigits: 0,
      });
    }
    if (Number.isNaN(decimalDigits)) {
      return integerDisplay;
    }
    return `${integerDisplay}.${decimalDigits === 0 ? '' : decimalDigits}`;
  }

  display() {
    const prev = Number(this.previousOperand);
    this.currentOperandElement.innerText = this.format();
    if (this.operation) {
      this.previousOperandElement.innerText = `${prev} ${this.operation}`;
    } else {
      this.previousOperandElement.innerText = prev === 0 ? '' : prev;
    }
  }
}

export default Calculator;
