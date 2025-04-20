import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./contexts/ThemeContext";
import CssBaseline from "@mui/material/CssBaseline"; // Resets CSS for MUI
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider>
    <BrowserRouter>
      <CssBaseline /> {/* Apply basic CSS reset */}
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
