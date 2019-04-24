import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import "./styles.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
function reducer(state = { login: false }, action) {
  if (action.type === "login") {
    return {
      login: action.login
    };
  }
  return state;
}
const store = createStore(reducer);
console.log("store", store.getState());
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
