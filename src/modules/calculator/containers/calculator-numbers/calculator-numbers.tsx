import * as React from "react";
import { Button, Grid, GridItem } from "@chakra-ui/react";

import { useCalculatorStateContextValue } from "modules/calculator/hooks";

const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const CalculatorNumbers = () => {
  const { handleNumberChange } = useCalculatorStateContextValue();

  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap={3}
      gridColumnStart={1}
      gridColumnEnd={3}
    >
      {NUMBERS.map((item, index) => (
        <GridItem key={index} colSpan={index === NUMBERS.length - 1 ? 3 : 1}>
          <Button
            colorScheme="messenger"
            width="100%"
            onClick={() => handleNumberChange(item)}
          >
            {item}
          </Button>
        </GridItem>
      ))}
    </Grid>
  );
};

export default CalculatorNumbers;
