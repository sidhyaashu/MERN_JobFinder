import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Bot from "./bot/Bot";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
// import store from "./bot/store.js"
import {store} from "./redux/store.js"

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <BrowserRouter>
        {/* <Bot /> */}
        <App/>
      </BrowserRouter>
    </Provider>

);
