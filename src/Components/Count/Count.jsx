import React from "react";
import styles from "./style.module.css";

const Count = ({ value }) => {
  return <h1 className={styles.value}>{value}</h1>;
};

export default Count;
