import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./pages/App";
import '../src/estilos/main.css'

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <div className="">
    <App />
  </div>
  </BrowserRouter>
);
