import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./theme/GlobalStyle";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import reducers from "./reducers/index";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

let store = createStore(reducers);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
