import React from "react";
import ReactDOM from "react-dom/client";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./index.css";

import App from "./App";

import theme from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <CssBaseline />
    </ThemeProvider>
  </React.StrictMode>
);
