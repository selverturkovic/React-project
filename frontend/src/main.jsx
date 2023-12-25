import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
import { Provider } from "react-redux";
import store from "../src/store/index.js";
// import "./index.css";
import Landingpage from "../src/Page/Landingpage/Landingpage.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <Landingpage />
    </Provider>
  </React.StrictMode>
);
