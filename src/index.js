import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";

import { BrowserRouter } from "react-router-dom";

import App from "./app";
import createStore from "./store";

const store = createStore();

function renderDom() {
  render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById("app"),
  );
}

renderDom();

if (module.hot) {
  module.hot.accept("./app", () => {
    renderDom();
  });
}
