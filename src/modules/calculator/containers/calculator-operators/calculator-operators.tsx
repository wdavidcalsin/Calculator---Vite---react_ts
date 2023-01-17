import * as React from "react";
import { Button, Grid, GridItem } from "@chakra-ui/react";

import { Operator } from "modules/calculator/calculator-constants";
import { useCalculatorStateContextValue } from "modules/calculator/hooks";

const DISPLAY_OPERATORS = Object.values(Operator);

const CalculatorOperations = () => {
  const { handleOperatorChange, handleCalculate, handleClear } =
    useCalculatorStateContextValue();

  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      templateRows="repeat(4, 1fr)"
      gap={3}
      gridColumnStart={3}
    >
      {DISPLAY_OPERATORS.map((item, index) => (
        <GridItem key={index}>
          <Button
            width="100%"
            colorScheme="orange"
            onClick={() => handleOperatorChange(item)}
          >
            {item}
          </Button>
        </GridItem>
      ))}
      <GridItem rowSpan={2}>
        <Button
          width="100%"
          colorScheme="orange"
          onClick={() => handleCalculate()}
          height="100%"
        >
          =
        </Button>
      </GridItem>
      <GridItem rowSpan={2}>
        <Button
          width="100%"
          colorScheme="orange"
          onClick={() => handleClear()}
          height="100%"
        >
          Clear
        </Button>
      </GridItem>
    </Grid>
  );
};

export default CalculatorOperations;
