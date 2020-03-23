// all our integration tests will live here,
// in a large scale app you can break out your int tests
// into functionality focused files

import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";

import Root from "Root";
import App from "components/App";

beforeEach(() => {
  // sets up moxios to intercept axios calls
  moxios.install();

  // moxios library tricks axios into thinking its making a network request
  // hands it alternative dummy data
  // maintained by axios

  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [
      {
        name: "Fetched number 1"
      },
      {
        name: "Fetched number 2"
      }
    ]
  });
});

afterEach(() => {
  // stops moxios from intercepting any other requests
  // with the stubbed request we set up above
  moxios.uninstall();
});

it("can fetch a list of comments and display them", done => {
  // render entire app
  // dont need to pass initial state in, cos testing the API fetch
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // find fetch comments button, click it
  wrapped.find(".fetch-comments").simulate("click");

  // delay here gives moxios time to run
  moxios.wait(() => {
    wrapped.update();

    // expect to find a list of comments
    expect(wrapped.find("li").length).toEqual(2);

    // signals to jest test is complete
    done();

    wrapped.unmount();
  });
});

it("can fetch a list of comments and display them", () => {
  // render entire app
  // find fetch comments button
  // click the button
  // expect to find a list of comments
});
