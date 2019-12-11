//App.js will hold REdux stuff/Data
import materializeCSS from "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

//store passed as prop to provide which is a react comp that knows how to
//read changes from the Redux store, anytime redux store gets some new state
//produced inside of it, the provider will inform all its child comp i.e.App
//about the new state being available and will update the component with the
//new state.
