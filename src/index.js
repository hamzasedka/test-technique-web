import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import rootReducer from "./Store/Reducers/rootReducer";
import "bootstrap/dist/css/bootstrap.css";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import * as serviceWorker from "./serviceWorker";
import { getFirebase, ReactReduxFirebaseProvider } from "react-redux-firebase";
import { firebase } from "./firebase";
import { composeWithDevTools } from "redux-devtools-extension";

/*setup our Redux Store*/
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(getFirebase)))
);
const rrfProps = {
  firebase,
  config: firebase,
  dispatch: store.dispatch,
};
/* Wrap our App to let it know about our store*/
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
