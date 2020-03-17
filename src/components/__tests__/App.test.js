import React from "react";
import { shallow } from "enzyme";
// open source, created by AirBnB
// npm install --save enzyme enzyme-adapter-react-16

import App from "components/App.js";
import CommentBox from "components/CommentBox.js";
import CommentList from "components/CommentList.js";

// it = global function - means no import required
// (string description of the test, function containing our test logic)

// have to initialise var here for scoping
let wrapped;

// jest helper function to avoid code duplication
// runs before each test
beforeEach(() => {
  // keyword insinuates comp that has additional functionality on top
  wrapped = shallow(<App />);
});
// this beforeEach only applies to test in THIS file, not in the project

it("shows a comment box", () => {
  // expect = global function
  expect(wrapped.find(CommentBox).length).toEqual(1);
  // toEqual = matcher function
});

it("shows a comment list", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});

// react always assumes its executed inside a browser
// jest runs in command line
// react installs JSDOM library - js code implementation of how browser works, so react thinks it's running in the browser
