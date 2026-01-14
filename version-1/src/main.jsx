import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

/**
 * This file is the starting point of the React app.
 *
 * What this file does:
 * ~ Connects React to the HTML page
 * ~ Turns on StrictMode to help catch mistakes while developing
 * ~ Wraps the app in BrowserRouter so routing works
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*
      BrowserRouter allows the app to use URLs
      to switch between pages without refreshing the browser
    */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
