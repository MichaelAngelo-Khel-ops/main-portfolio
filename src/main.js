import React from "react";
import ReactDOM from "react-dom/client";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import App from "./App";
import "./styles/global.css";

gsap.registerPlugin(ScrollToPlugin);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);