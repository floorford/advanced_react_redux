// json schema - library which lets you validate json
// https://www.json-schema.org
// create a schema document - the library can then use that!
// what your json SHOULD be, tool to create this!
// https://www.jsonschema.net
// tv4 - tiny validator 4, takes json schema, validates it

import stateSchema from "middlewares/stateSchema";
import tv4 from "tv4";

export default ({ dispatch, getState }) => next => action => {
  // calling next first to get it to the reducers!
  next(action);

  // other properties in first func argument! getState!
  const valid = tv4.validate(getState(), stateSchema);
  if (!valid) {
    console.warn("Invalid state schema detected");
  }
};
