import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "materialize-css/dist/css/materialize.min.css";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";

import reducers from "./reducers"; // this will import the combined reducers
//we now need to pass the reducers as the first argument to our store.

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

console.log("Stripe key is: ", process.env.REACT_APP_STRIPE_KEY);
console.log("The current environment is: ", process.env.NODE_ENV);
