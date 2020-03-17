import React from "react";
import ReactDOM from "react-dom";

import App from "components/App.js";
import Root from "Root.js";

const div = document.getElementById("root");

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  div
);
