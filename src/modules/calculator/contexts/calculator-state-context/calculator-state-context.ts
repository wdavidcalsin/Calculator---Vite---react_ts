import * as React from "react";

import type { CalculatorStateContextValue } from "typings/modules";

const CalculatorStateContext =
  React.createContext<CalculatorStateContextValue | null>(null);

export default CalculatorStateContext;
