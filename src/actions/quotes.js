// TODO: Create action creators as defined in tests
// import { combineReducers } from "redux";
//
// const rootReducer = combineReducers({
//   authors: authorsReducer,
//   contents: contentsReducer
// });
//
// export default rootReducer;

export default function quotesReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];

    case "REMOVE_QUOTE":
      idx = state.indexOf(action.id);
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    default:
      return state;
  }
}

// function authorsReducer(state = [], action) {
//   let idx;
//   switch (action.type) {
//     case "ADD_AUTHOR":
//       return [...state, action.author];
//
//     case "REMOVE_AUTHOR":
//       idx = state.indexOf(action.id);
//       return [...state.slice(0, idx), ...state.slice(idx + 1)];
//
//     default:
//       return state;
//   }
// }
