import { SAVE_COMMENT } from "actions/types";
import { saveComment } from "actions";

// each action creater would have a describe block
describe("Save comment", () => {
  it("has the correct type", () => {
    const actionCreator = saveComment();

    expect(actionCreator.type).toEqual(SAVE_COMMENT);
  });

  it("has the correct payload", () => {
    // gotta pass in the payload here!
    const actionCreator = saveComment("Test comment");

    expect(actionCreator.payload).toEqual("Test comment");
  });
});
