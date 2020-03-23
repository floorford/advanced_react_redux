import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "components/App.js";
import Root from "Root.js";

const div = document.getElementById("root");

ReactDOM.render(
  <Root>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Root>,
  div
);
