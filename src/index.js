//@flow
import * as React from "react";
import { render } from "react-dom";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";

const container = document.getElementById("root");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  (container: any)
);
