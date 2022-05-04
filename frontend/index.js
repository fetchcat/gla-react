import React from "react";
import ReactDOM from "react-dom/client";
import "./src/styles/index.css";
import App from "./src/App";
import axios from "axios";

axios.defaults.baseURL = "https://www.fetchcat.ca/api/glareact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
