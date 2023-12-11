import React from "react";
import { initialize, mswDecorator } from "msw-storybook-addon";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";
// import { createMemoryHistory } from "history";
import { theme } from "../src/style/theme.js";

initialize();

// const history = createMemoryHistory();

export const decorators = [
  mswDecorator,
  (Story, context) => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  ),
];
