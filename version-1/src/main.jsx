import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "../App.js";

/**
 * Entry point for the React application
 *
 * Purpose:
 * - Mounts the React app to the DOM
 * - Enables React StrictMode for development checks
 * - Wraps the app in BrowserRouter to enable routing
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* 
      BrowserRouter enables client-side routing
      so pages can change without reloading the browser
    */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
