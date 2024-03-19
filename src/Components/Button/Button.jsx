import React from "react";
import styles from "./style.module.css";

const Button = ({ onClick, symbol }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {symbol}
    </button>
  );
};

export default Button;
