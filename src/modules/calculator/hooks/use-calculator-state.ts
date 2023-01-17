import * as React from "react";

import type {
  CalculatorState,
  CalculatorStateActionPaired,
  CalculatorStateActionPayload,
  CalculatorStateMethods,
  UseCalculatorStateReturns,
} from "typings/modules";
import { CalculatorStateActionTypes } from "modules/calculator/calculator-constants";
import { calculate } from "modules/calculator/calculator-utils";

const initialState: CalculatorState = {
  accumulatedTotal: 0,
  currentTotal: 0,
  currentOperator: null,
};

const reducer = (
  state: CalculatorState,
  action: CalculatorStateActionPaired
) => {
  const { type, payload } = action;

  switch (type) {
    case CalculatorStateActionTypes.CHANGE_NUMBER: {
      const { value } =
        payload as CalculatorStateActionPayload[CalculatorStateActionTypes.CHANGE_NUMBER];

      const newState = { ...state };

      newState.currentTotal = Number(
        String(state.currentTotal) + String(value)
      );

      return newState;
    }

    case CalculatorStateActionTypes.CHANGE_OPERATOR: {
      const { operator } =
        payload as CalculatorStateActionPayload[CalculatorStateActionTypes.CHANGE_OPERATOR];

      const newState = { ...state };

      newState.currentOperator = operator;

      if (newState.currentTotal === 0) {
        return newState;
      }

      if (newState.accumulatedTotal !== 0 && newState.currentTotal !== 0) {
        const newAccumulatedTotal = calculate(
          state.accumulatedTotal,
          state.currentTotal,
          state.currentOperator!
        );

        newState.accumulatedTotal = newAccumulatedTotal;

        newState.currentTotal = 0;

        return newState;
      }

      newState.accumulatedTotal = state.currentTotal;

      newState.currentTotal = 0;

      return newState;
    }

    case CalculatorStateActionTypes.CALCULATE: {
      const newState = { ...state };

      if (state.currentOperator === null) {
        return newState;
      }

      const newCurrentTotal = calculate(
        state.accumulatedTotal,
        state.currentTotal,
        state.currentOperator!
      );

      newState.accumulatedTotal = 0;

      newState.currentTotal = newCurrentTotal;

      newState.currentOperator = null;

      return newState;
    }

    case CalculatorStateActionTypes.CLEAR: {
      const newState = { ...state };

      newState.accumulatedTotal = 0;

      newState.currentTotal = 0;

      newState.currentOperator = null;

      return newState;
    }

    default: {
      throw new Error(`The action type is not supported`);
    }
  }
};

const useCalculatorState = (): UseCalculatorStateReturns => {
  const [state, dispatch] = React.useReducer<typeof reducer>(
    reducer,
    initialState
  );

  const handleNumberChange: CalculatorStateMethods["handleNumberChange"] = (
    value
  ) => {
    dispatch({
      type: CalculatorStateActionTypes.CHANGE_NUMBER,
      payload: { value },
    });
  };

  const handleOperatorChange: CalculatorStateMethods["handleOperatorChange"] = (
    operator
  ) => {
    dispatch({
      type: CalculatorStateActionTypes.CHANGE_OPERATOR,
      payload: { operator },
    });
  };

  const handleCalculate: CalculatorStateMethods["handleClear"] = () => {
    dispatch({
      type: CalculatorStateActionTypes.CALCULATE,
    });
  };

  const handleClear: CalculatorStateMethods["handleClear"] = () => {
    dispatch({
      type: CalculatorStateActionTypes.CLEAR,
    });
  };

  return {
    state,
    handleNumberChange,
    handleOperatorChange,
    handleCalculate,
    handleClear,
  };
};

export default useCalculatorState;
