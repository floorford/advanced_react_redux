import React from "react";
import { mount } from "enzyme";

import Root from "Root.js";
import CommentList from "components/CommentList.js";

let wrapped;
let initialState;

beforeEach(() => {
  initialState = {
    comments: ["Comment 1", "Comment 2"]
  };

  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("creates one li per comment", () => {
  expect(wrapped.find("li").length).toEqual(initialState.comments.length);
});

// describe function - group sets of tests with common setup/tear down
// describe("the text area", () => {
//   beforeEach(() => {
//     wrapped
//       .find("textarea")
//       .simulate("change", { target: { value: "test comment" } });
//     // enzyme method - refers to vanilla js event
//     // object gets bound with event object

//     // force our comp to re-render, not waiting for setState
//     // another enzyme method
//     wrapped.update();
//   });

//   it("shows text from each comment", () => {
//     // same as checking as what is set in state as our state value is set to the text area value
//     expect(wrapped.find("textarea").prop("value")).toEqual("test comment");
//   });

//   it("can submit form, it clears the textarea", () => {
//     wrapped.find("form").simulate("submit");

//     wrapped.update();

//     expect(wrapped.find("textarea").prop("value")).toEqual("");
//   });
// });
