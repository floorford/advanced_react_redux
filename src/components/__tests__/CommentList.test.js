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

// render function (enzyme) returns a CheerioWrapper
// http://www.github.com/cheeriojs/cheerio
it("shows the text for each comment", () => {
  expect(wrapped.render().text()).toContain("Comment 1");
  expect(wrapped.render().text()).toContain("Comment 2");
});
