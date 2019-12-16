// el inicio de la app
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
///comentemos todo lo que quieran quiero ver si funciona el merge jajaja

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={() => <div>Hola</div>} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
