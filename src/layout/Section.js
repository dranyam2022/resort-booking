import React from "react";
import styles from "./Section.module.css";

const Section = (props) => {
  const bgColor = props.bgColor;
  return <section className={styles[bgColor]}>{props.children}</section>;
};

export default Section;
