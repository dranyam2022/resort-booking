import React from "react";
import styles from "./Logo.module.css";
import { GiSurferVan } from "react-icons/gi";

const Logo = () => {
  return (
    <span className={styles.container__logo}>
      <div>
        <GiSurferVan className={styles.logo} />
      </div>
      <div> WAVE .</div>
    </span>
  );
};

export default Logo;
