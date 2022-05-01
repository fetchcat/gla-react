import React from "react";
import ReactDOM from "react-dom/client";
import "./src/styles/index.css";
import App from "./src/App";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5003";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
