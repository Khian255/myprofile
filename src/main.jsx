import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/style.css";
import "./styles/nav-dropdown.css";

// HashRouter works on any static host (GitHub Pages, file://) without
// server-side rewrite rules.
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
