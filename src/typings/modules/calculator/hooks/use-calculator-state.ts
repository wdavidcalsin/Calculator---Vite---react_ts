import type { CalculatorStateActionTypes, Operator } from "modules/calculator";

interface CalculatorState {
  accumulatedTotal: number;
  currentTotal: number;
  currentOperator: Operator | null;
}

type CalculatorStateActionPayload = {
  [CalculatorStateActionTypes.CHANGE_NUMBER]: { value: number };
  [CalculatorStateActionTypes.CHANGE_OPERATOR]: { operator: Operator };
  [CalculatorStateActionTypes.CALCULATE]: void;
  [CalculatorStateActionTypes.CLEAR]: void;
};

interface CalculatorStateActionPaired {
  type: CalculatorStateActionTypes;
  payload?: Partial<CalculatorStateActionPayload[CalculatorStateActionTypes]>;
}

interface CalculatorStateMethods {
  handleNumberChange: (value: number) => void;
  handleOperatorChange: (operator: Operator) => void;
  handleCalculate: () => void;
  handleClear: () => void;
}

interface UseCalculatorStateReturns extends CalculatorStateMethods {
  state: CalculatorState;
}

export type {
  CalculatorState,
  CalculatorStateActionPaired,
  CalculatorStateActionPayload,
  CalculatorStateMethods,
  UseCalculatorStateReturns,
};
