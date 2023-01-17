import * as React from "react";
import { Box } from "@chakra-ui/react";

import { useCalculatorStateContextValue } from "modules/calculator/hooks";

const CalculatorResult = () => {
  const {
    state: { accumulatedTotal, currentTotal, currentOperator },
  } = useCalculatorStateContextValue();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p="3"
      bg="gray.600"
      textColor="white"
      borderRadius="md"
      gridColumnStart={1}
      gridColumnEnd={4}
    >
      <div>
        <p>{accumulatedTotal}</p>
        <span>{currentOperator}</span>
      </div>
      <div>{currentTotal}</div>
    </Box>
  );
};

export default CalculatorResult;
