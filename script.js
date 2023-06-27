//* Add Function
function add(num1, num2) {
  let sum = num1 + num2;

  if (Math.round(sum) !== sum) return (sum = sum.toFixed(2));

  return sum;
}

//* Subraction Function
function subtract(num1, num2) {
  let difference = num1 - num2;

  if (Math.round(difference) !== difference)
    return (difference = sum.toFixed(2));

  return difference;
}
//* Multiplication Function
function multiply(num1, num2) {
  let product = num1 * num2;

  if (Math.round(product) !== product) return (product = sum.toFixed(2));

  return product;
}
//* Division Function
function divide(num1, num2) {
  let qoutient = num1 / num2;

  if (Math.round(qoutient) !== qoutient) return (qoutient = sum.toFixed(2));

  return qoutient;
}

//* Division Function
function remainder(num1, num2) {
  let remainder = num1 * num2;

  if (Math.round(remainder) !== remainder) return (remainder = sum.toFixed(2));

  return remainder;
}

//* Gets the number displayed
function getNumber() {
  return parseFloat(displayedNumber.textContent);
}

//* Operation Constructor
function Operation(number, operator, anotherNumber) {
  this.number = number;
  this.operator = operator;
  this.anotherNumber = anotherNumber;
}

//* Performs the right operation
function operate(operation) {
  switch (operation.operator) {
    case "+":
      return add(operation.number, operation.anotherNumber);
    case "-":
      return subtract(operation.number, operation.anotherNumber);
    case "*":
      return multiply(operation.number, operation.anotherNumber);
    case "/":
      return divide(operation.number, operation.anotherNumber);
    case "*":
      return remainder(operation.number, operation.anotherNumber);
  }
}

//* Resets the variables
function resetVariables() {
  number = 0;
  operator = "";
  anotherNumber = 0;
}

//* Displays the number
const displayedNumber = document.querySelector(".displayNumber");
const numbers = document.querySelectorAll(".number");

//* Clears the displayed numbers
let cleared = false;
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (!cleared) {
      cleared = true;
      displayedNumber.textContent = "";
    }
  });
});

//* Toggles add and postive signs
const sign = document.querySelector(".sign");

sign.addEventListener("click", () => {
  if (displayedNumber.textContent[0] == "-") {
    displayedNumber.textContent = displayedNumber.textContent.substring(1);
  } else {
    displayedNumber.textContent = "-" + displayedNumber.textContent;
  }
});

//* Displays the numbers of the cliked buttons
numbers.forEach((number) => {
  number.addEventListener("click", () => {
    displayedNumber.textContent += number.textContent;
  });
});

//* Resets everything when clear button is clicked
const clearBtn = document.querySelector(".clear");

clearBtn.addEventListener("click", () => {
  cleared = false;
  dotBtn.disabled = false;
  displayedNumber.textContent = "0";
  resetVariables();
});

const operatorBtns = document.querySelectorAll(".operator");

let number = 0;
let operator = "";
let anotherNumber = 0;

//* Operator buttons
operatorBtns.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", () => {
    ////* Saves the number and operator
    if (operator == "") {
      cleared = false;
      dotBtn.disabled = false;

      number = getNumber();
      console.log("Number: " + number);

      operator = operatorBtn.textContent;
      console.log("Operator: " + operator);
    } //* Saves the other number and creates and object for operate function to process
    else {
      cleared = false;
      dotBtn.disabled = false;

      anotherNumber = getNumber();
      console.log("AnotherNumber: " + anotherNumber);

      let operation = new Operation(number, operator, anotherNumber);

      console.log("Result: " + operate(operation));
      displayedNumber.textContent = operate(operation);

      number = getNumber();
      console.log("Number: " + number);

      operator = operatorBtn.textContent;
      console.log("Operator: " + operator);
    }
  });
});

//* Add period/dot to numbers
const dotBtn = document.querySelector(".dot");

dotBtn.addEventListener("click", () => {
  dotBtn.disabled = true;
});
