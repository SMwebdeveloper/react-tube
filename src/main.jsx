import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
