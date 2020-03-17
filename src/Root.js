// component which exports our provider tag and store
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "reducers";

export default ({ children, initialState = {} }) => {
  return (
    <Provider store={createStore(reducers, initialState)}>{children}</Provider>
  );
};

// wrapping anything we pass in as children in our provider so we can use in in test and in our app
