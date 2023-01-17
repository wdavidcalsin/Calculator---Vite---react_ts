enum CalculatorStateActionTypes {
  CHANGE_OPERATOR = "CHANGE_OPERATOR",
  CHANGE_NUMBER = "CHANGE_NUMBER",
  CALCULATE = "CALCULATE",
  CLEAR = "CLEAR",
}

enum Operator {
  ADDITION = "+",
  SUBTRACTION = "-",
  MULTIPLICATION = "*",
  DIVISION = "/",
}

export { CalculatorStateActionTypes, Operator };
