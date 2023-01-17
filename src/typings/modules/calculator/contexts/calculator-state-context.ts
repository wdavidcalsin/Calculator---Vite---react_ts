import type {
  CalculatorState,
  CalculatorStateMethods,
} from "typings/modules/calculator/hooks";

type CalculatorStateContextValue = {
  state: CalculatorState;
} & CalculatorStateMethods;

export type { CalculatorStateContextValue };
