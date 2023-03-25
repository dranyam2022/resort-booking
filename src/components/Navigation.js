import React from "react";
import { GiSurferVan } from "react-icons/gi";
import styles from "./Navigation.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "../layout/Button";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <span className={styles.container__logo}>
        <div>
          <GiSurferVan className={styles.logo} />
        </div>
        <div> WAVE .</div>
      </span>
      <ul className={styles.links}>
        <li className={styles.link}>EXPLORE</li>
        <li className={styles.link}>ROOMS</li>
        <li className={styles.link}>ABOUT</li>
        <li className={styles.link}>ACTIVITIES</li>
      </ul>
      <Button className={styles.btn}>
        BOOK NOW <AiOutlineArrowRight className={styles.arrowRight} />
      </Button>
    </nav>
  );
};

export default Navigation;
