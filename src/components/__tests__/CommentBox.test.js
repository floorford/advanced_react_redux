import React from "react";
import { mount } from "enzyme";
// mount (full DOM) uses JSDOM in terminal so have to do clean up!

import Root from "Root.js";
import CommentBox from "components/CommentBox.js";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  // clean up so other tests unaffected in virtual DOM
  wrapped.unmount();
});

it("has a text area and a button", () => {
  // find can be used for component instances and html elements
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

// describe function - group sets of tests with common setup/tear down
describe("the text area", () => {
  beforeEach(() => {
    wrapped
      .find("textarea")
      .simulate("change", { target: { value: "test comment" } });
    // enzyme method - refers to vanilla js event
    // object gets bound with event object

    // force our comp to re-render, not waiting for setState
    // another enzyme method
    wrapped.update();
  });

  it("allows users to enter input into the text area", () => {
    // same as checking as what is set in state as our state value is set to the text area value
    expect(wrapped.find("textarea").prop("value")).toEqual("test comment");
  });

  it("can submit form, it clears the textarea", () => {
    wrapped.find("form").simulate("submit");

    wrapped.update();

    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
