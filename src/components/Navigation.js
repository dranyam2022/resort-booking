import React from "react";
import { GiSurferVan } from "react-icons/gi";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <>
      <span className={styles.container}>
        <div>
          <GiSurferVan className={styles.logo} />
        </div>
        <div> WAVE .</div>
      </span>
    </>
  );
};

export default Navigation;
