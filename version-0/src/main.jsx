import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "../App.jsx";

/**
 * Entry/starting point of the React app
 *
 * Purpose:
 * ~ Connects the React app to the HTML page
 * ~ Turns on StrictMode to help catch mistakes while coding
 * ~ Wraps the app in BrowserRouter so routing works
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 
      BrowserRouter allows the app to use URLS to switch
      between pages without refreshing the browser
    */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
