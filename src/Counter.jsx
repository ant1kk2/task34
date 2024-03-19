import React from "react";
import Button from "./Components/Button/Button.jsx";
import Count from "./Components/Count/Count.jsx";
import { useSelector, useDispatch } from "react-redux";
import increaseValue from "./redux/actions/increaseValue.js";
import decreaseValue from "./redux/actions/decreaseValue.js";
import resetValue from "./redux/actions/resetValue.js";

const Counter = () => {

  const count = useSelector(state => state.value)
  const dispatch = useDispatch()

  return (
    <div className="app">
      <Button symbol="+" onClick={() => dispatch(increaseValue())} />
      <Count value={count} />
      <Button symbol="-" onClick={() => dispatch(decreaseValue())} />
      <Button symbol="Reset" onClick={() => dispatch(resetValue())} />
    </div>
  );
};

export default Counter;
