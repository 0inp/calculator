class Calculator {
  constructor(previousOperandText, currentOperandText) {
    this.previousOperandText = previousOperandText;
    this.currentOperandText = currentOperandText;
    this.operation = undefined;
    this.clear();
  }

  /**
   * This is a JavaScript docstring
   * Here you explain the purpose of the following function
   */
  clear() {
    this.previousOperandText.innerText = "";
    this.currentOperandText.innerText = "";
    this.operation = undefined;
  }

  removeLastChar(s) {
    return s == null || s.length == 0 ? null : s.substring(0, s.length - 1);
  }

  delete() {
    this.currentOperandText.innerText = this.removeLastChar(
      this.currentOperandText.innerText,
    );
  }

  appendNumber(number) {
    if (number === "." && this.currentOperandText.innerText.includes("."))
      return;
    this.currentOperandText.innerText =
      this.currentOperandText.innerText.toString() + number.toString();
  }

  chooseOperation(operation) {
    this.previousOperandText.innerText =
      this.previousOperandText.innerText.toString() +
      " " +
      this.currentOperandText.innerText.toString();
    if (!(operation === "=")) {
      this.previousOperandText.innerText =
        this.previousOperandText.innerText.toString() + " " + operation;
    }
    this.currentOperandText.innerText = "";
  }

  compute() {
    this.chooseOperation("=");
    var totalOperation =
      this.previousOperandText.innerText.toString() +
      this.currentOperandText.innerText.toString();
    totalOperation = totalOperation.replace(/\s/g, "").trim();
    this.currentOperandText.innerText = eval(totalOperation);
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationsButtons = document.querySelectorAll("[data-operation]");
const deleteButton = document.querySelector("[data-delete]");
const equalButton = document.querySelector("[data-equal]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandText = document.querySelector("[data-previous-operand]");
const currentOperandText = document.querySelector("[data-current-operand]");

const calculator = new Calculator(previousOperandText, currentOperandText);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
  });
});
deleteButton.addEventListener("click", () => {
  calculator.delete();
});
allClearButton.addEventListener("click", () => {
  calculator.clear();
});
operationsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
  });
});
equalButton.addEventListener("click", () => {
  calculator.compute();
});
