import "./index.css";

import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";

import { LogicProvider } from "./contexts/Logic";
import OldApp from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <LogicProvider>
        <OldApp />
      </LogicProvider>
    </ChakraProvider>
  </React.StrictMode>
);
