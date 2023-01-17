import * as React from "react";
import { useContext } from "react";
import { Button, Grid, GridItem, Heading } from "@chakra-ui/react";

import { LogicContext } from "../contexts/Logic";

interface propsNumber {
  heightButton: string;
}

const numbersVal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function NumberFunction(props: propsNumber) {
  const { setCalculatorVal } = useContext(LogicContext)!;

  const handleNumber = (item: number) => {
    setCalculatorVal((prev) => {
      return {
        ...prev,
        currentOperator: prev.currentOperator + item.toString(),
      };
    });
  };

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={3}>
      {numbersVal.map((item, index) => (
        <GridItem
          key={index}
          colSpan={index === numbersVal.length - 1 ? 3 : 1}
          height={props.heightButton}
        >
          <Button
            background={"blue"}
            width="100%"
            height={"100%"}
            onClick={() => handleNumber(item)}
          >
            {item}
          </Button>
        </GridItem>
      ))}
    </Grid>
  );
}

export default NumberFunction;
