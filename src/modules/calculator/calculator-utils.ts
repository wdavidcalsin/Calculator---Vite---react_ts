import { Operator } from "./calculator-constants";

const calculate = (
  firstValue: number,
  secondValue: number,
  operator: Operator
) => {
  switch (operator) {
    case Operator.ADDITION: {
      return firstValue + secondValue;
    }

    case Operator.SUBTRACTION: {
      return firstValue - secondValue;
    }

    case Operator.MULTIPLICATION: {
      return firstValue * secondValue;
    }

    case Operator.DIVISION: {
      return firstValue / secondValue;
    }

    default: {
      throw new Error(`The ${operator} was not found`);
    }
  }
};

export { calculate };
