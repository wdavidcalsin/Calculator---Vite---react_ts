import * as React from "react";
import { Box, Heading } from "@chakra-ui/react";

import { CalculatorResult } from "modules/calculator/containers/calculator-result";
import { CalculatorStateContext } from "modules/calculator/contexts";
import { useCalculatorState } from "modules/calculator/hooks";
import CalculatorNumbers from "../calculator-numbers/calculator-numbers";
import CalculatorOperations from "../calculator-operators/calculator-operators";

function Calculator() {
  const {
    state,
    handleNumberChange,
    handleOperatorChange,
    handleCalculate,
    handleClear,
  } = useCalculatorState();

  return (
    <CalculatorStateContext.Provider
      value={{
        state,
        handleNumberChange,
        handleOperatorChange,
        handleCalculate,
        handleClear,
      }}
    >
      <Box
        display={"flex"}
        height="100vh"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box display="grid" gap="3" w="2xl" mx="auto" my="10" height={"80"}>
          <Heading
            as="h2"
            size="md"
            textTransform={"uppercase"}
            textAlign={"center"}
            gridColumnStart={1}
            gridColumnEnd={4}
          >
            Calculator
          </Heading>

          <CalculatorResult />
          <CalculatorNumbers />
          <CalculatorOperations />
        </Box>
      </Box>
    </CalculatorStateContext.Provider>
  );
}

export default Calculator;
