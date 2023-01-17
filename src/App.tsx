import "./App.css";

import * as React from "react";
import {
  Box,
  Center,
  ChakraProvider,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";

import { Calculator } from "modules/calculator";
import NumberFunction from "./components/number";
import OperatorFunction from "./components/operator";
import ResultFunction from "./components/result";

const heightButton = "12";

function App() {
  return (
    <ChakraProvider>
      <Calculator />
    </ChakraProvider>
  );
}

function OldApp() {
  return (
    <Center
      bg="#2A4365"
      color="white"
      height={"100vh"}
      flexDirection={"column"}
    >
      <Box width={"xl"}>
        <Heading size="md" textAlign={"center"} marginBottom={"5"}>
          Calculator
        </Heading>

        <Grid templateColumns="repeat(3, 1fr)" gap={3}>
          <GridItem colSpan={3}>
            <ResultFunction />
          </GridItem>
          <GridItem colSpan={2}>
            <NumberFunction heightButton={heightButton} />
          </GridItem>
          <GridItem colSpan={1}>
            <OperatorFunction heightButton={heightButton} />
          </GridItem>
        </Grid>
      </Box>
    </Center>
  );
}

export default App;
