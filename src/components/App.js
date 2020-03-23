import React from "react";

import CommentList from "components/CommentList.js";
import CommentBox from "components/CommentBox.js";
// instead of ./components
// see jsconfig.json = this is so that we can use absolute imports in our project

// See also the official docs:
// https://facebook.github.io/create-react-app/docs/importing-a-component#absolute-imports

const App = () => {
  return (
    <div>
      <CommentBox />
      <CommentList />
    </div>
  );
};

export default App;

// https://jsonplaceholder.typicode.com/
// API data faker we are using

// unit test - touching one piece of our app - atomic testing
// integration test - touching a workflow of our app
