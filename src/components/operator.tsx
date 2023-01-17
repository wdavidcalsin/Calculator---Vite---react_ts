import * as React from "react";
import { useContext } from "react";
import { Button, Grid, GridItem } from "@chakra-ui/react";

import { LogicContext } from "../contexts/Logic";

interface propsOperator {
  heightButton: string;
}

const operatorsVal = ["+", "-", "*", "/", "=", "Clear"];

function OperatorFunction(props: propsOperator) {
  const { handleOperator } = useContext(LogicContext)!;

  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      templateRows="repeat(4, 1fr)"
      gap={3}
    >
      {operatorsVal.map((item, index) => (
        <GridItem
          key={index}
          rowSpan={
            index === operatorsVal.length - 2 ||
            index === operatorsVal.length - 1
              ? 2
              : 1
          }
        >
          <Button
            background="red"
            width="100%"
            height={
              index === operatorsVal.length - 2 ||
              index === operatorsVal.length - 1
                ? "100%"
                : props.heightButton
            }
            onClick={() => handleOperator(item)}
          >
            {item}
          </Button>
        </GridItem>
      ))}
    </Grid>
  );
}

export default OperatorFunction;
