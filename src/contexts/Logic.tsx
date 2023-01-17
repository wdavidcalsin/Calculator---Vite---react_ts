import * as React from "react";

interface CalculatorState {
  currentOperator: string;
  accumulatedTotal: string;
  currentTotal: string;
}

const initialState: CalculatorState = {
  currentOperator: "",
  accumulatedTotal: "",
  currentTotal: "",
};

export const LogicContext = React.createContext<{
  setCalculatorVal: React.Dispatch<React.SetStateAction<CalculatorState>>;
  calculatorVal: CalculatorState;
  handleOperator: (operator: string) => void;
} | null>(null);

export const LogicProvider = ({ children }: { children: React.ReactNode }) => {
  const [calculatorVal, setCalculatorVal] =
    React.useState<CalculatorState>(initialState);

  const calculate = () => {
    let result: number = 0;
    switch (calculatorVal.currentTotal) {
      case "+":
        result =
          Number(calculatorVal.currentOperator) +
          Number(calculatorVal.accumulatedTotal);
        break;
      case "-":
        result =
          Number(calculatorVal.currentOperator) -
          Number(calculatorVal.accumulatedTotal);
        break;
      case "*":
        result =
          Number(calculatorVal.currentOperator) *
          Number(calculatorVal.accumulatedTotal);
        break;
      case "/":
        result =
          Number(calculatorVal.currentOperator) /
          Number(calculatorVal.accumulatedTotal);
        break;
    }
    setCalculatorVal({
      ...calculatorVal,
      currentOperator: result.toString(),
    });
  };

  const handleOperator = (operator: string) => {
    if (
      calculatorVal.currentOperator !== "" &&
      calculatorVal.accumulatedTotal !== ""
    ) {
      calculate();
    }

    setCalculatorVal((prev) => ({
      ...prev,
      accumulatedTotal: prev.currentOperator,
      currentTotal: operator,
      currentOperator: "",
    }));
  };

  return (
    <LogicContext.Provider
      value={{ calculatorVal, setCalculatorVal, handleOperator }}
    >
      {children}
    </LogicContext.Provider>
  );
};
