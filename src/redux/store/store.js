import { createStore } from "redux";
import reducer from "./../reducers/reducer.js";

export const INITIAL_VALUE = 123;

const state = {
  value: INITIAL_VALUE,
};

const store = createStore(reducer, state);
export default store