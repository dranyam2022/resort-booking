import React from "react";
import styles from "./SectionContainer.module.css";

const SectionContainer = ({ children }) => {
  const classes = `${styles.container} ${styles["container--bg-dark"]}`;
  return <section className={classes}>{children}</section>;
};

export default SectionContainer;
