// this middleware is replacing redux-promise/redux-thunk

export default ({ dispatch }) => next => action => {
  // your middleware's logic goes here!

  if (!action.payload || !action.payload.then) {
    // check to see if promise, if not send on
    return next(action);
  }

  action.payload.then(function(response) {
    // function called when promise resolved
    const newAction = { ...action, payload: response };
    // updates action with the resolved data

    // takes action and puts through all middleware to reducers
    dispatch(newAction);
  });
};

// these are equivalent, above is middleware boilerplate

// export default function({ dispatch }) {
//   return function(next) {
//     return function(action) {};
//   };
// }

// middlewares = functions which return each other

// 1st function:
// - called with different properties in first arg

// 2nd function:
// - called with single arg of next()
// - will forward action to next middleware if not relevant

// 3rd function:
// - called with action object (payload and type)
