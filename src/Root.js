// component which exports our provider tag and store
import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import async from "middlewares/async";
import stateValidator from "middlewares/stateValidator";

// import reduxPromise from "redux-promise";
// alt to redux-thunk

import reducers from "reducers";

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(async, stateValidator)
  );

  return <Provider store={store}>{children}</Provider>;
};

// wrapping anything we pass in as children in our provider so we can use in in test and in our app
