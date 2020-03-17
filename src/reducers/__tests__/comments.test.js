import commentsReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";

it("handles actions of type SAVE_COMMENT", () => {
  // checking a specific reducer
  const action = {
    type: SAVE_COMMENT,
    payload: "New comment"
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual(["New comment"]);
});

it("handles actions with unknown type", () => {
  // checking our default case in our comments reducer
  const newState = commentsReducer([], {});

  expect(newState).toEqual([]);
});
