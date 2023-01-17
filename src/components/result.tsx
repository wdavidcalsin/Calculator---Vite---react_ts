import * as React from "react";
import { useContext, useState } from "react";
import { Box } from "@chakra-ui/react";

import { LogicContext } from "../contexts/Logic";

function ResultFunction() {
  const { calculatorVal, setCalculatorVal } = useContext(LogicContext)!;

  return (
    <Box
      bg="#171923"
      w="100%"
      p={4}
      color="white"
      textAlign={"right"}
      rounded={"md"}
      display="flex"
      justifyContent={"space-between"}
    >
      <Box>
        <div>
          {calculatorVal.accumulatedTotal == ""
            ? ""
            : calculatorVal.accumulatedTotal}
        </div>
        <div>
          {calculatorVal.currentTotal == "" ? "" : calculatorVal.currentTotal}
        </div>
      </Box>
      <Box>
        {calculatorVal.currentOperator == ""
          ? 0
          : calculatorVal.currentOperator}
      </Box>
    </Box>
  );
}

export default ResultFunction;
