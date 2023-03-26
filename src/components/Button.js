import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  const classes = `${styles.btn} ${styles[props.color]}`;
  return <button className={classes}>{props.children}</button>;
};

export default Button;
