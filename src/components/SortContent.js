import React from "react";
import CardItem from "./CardItem";
import styles from "./SortContent.module.css";

const SortContent = (props) => {
  return (
    <div className={styles.container}>
      <CardItem />
    </div>
  );
};

export default SortContent;
