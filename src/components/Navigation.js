import React from "react";
import { GiSurferVan } from "react-icons/gi";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <>
      <span className={styles.container}>
        <GiSurferVan className={styles.logo} />
        WAVE .
      </span>
    </>
  );
};

export default Navigation;
