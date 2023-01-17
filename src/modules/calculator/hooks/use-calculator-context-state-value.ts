import * as React from "react";

import { CalculatorStateContext } from "modules/calculator/contexts";

const useCalculatorStateContextValue = () => {
  const value = React.useContext(CalculatorStateContext);

  if (!value) {
    throw new Error(
      "The useCalculatorStateContextValue must be wrapped within CalculatorStateContext.Provider"
    );
  }

  return value;
};

export default useCalculatorStateContextValue;
