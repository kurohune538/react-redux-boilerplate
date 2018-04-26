import { handleActions } from "redux-actions";

import { increase } from "../actions/counter";

export default handleActions(
  {
    [increase]: (state, action) => ({
      count: state.count + action.payload,
    }),
  },
  {
    count: 0,
  },
);
