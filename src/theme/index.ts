import { createTheme } from "@mui/material";

export const pinkTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#e91e63",
    },
    secondary: {
      main: "#f8bbd0",
    },
    background: {
      default: "#fff0f6",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});
