import { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { pinkTheme, darkTheme } from "./theme";

const RootApp = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Provider store={store}>
      <ThemeProvider theme={darkMode ? darkTheme : pinkTheme}>
        <CssBaseline />
        <App darkMode={darkMode} setDarkMode={setDarkMode} />
      </ThemeProvider>
    </Provider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<RootApp />);
