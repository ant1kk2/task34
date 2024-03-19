import { DECREASE_VALUE, INCREASE_VALUE, RESET_VALUE } from "../actions/ActionTypes.js";
import { INITIAL_VALUE } from "./../store/store.js";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case INCREASE_VALUE:
      return {
        ...state,
        value: state.value + 1,
      };
    case DECREASE_VALUE:
      return {
        ...state,
        value: state.value - 1,
      };
    case RESET_VALUE:
      return {
        ...state,
        value: INITIAL_VALUE,
      };
    default:
      return state;
  }
};

export default reducer;
