import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
import { Provider } from "react-redux";
import store from "../src/store/index.js";
// import "./index.css";
// import Landingpage from "../src/Page/Landingpage/Landingpage.jsx";
import MyLayout from "./components/Layout.jsx";
import App from "./App.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
