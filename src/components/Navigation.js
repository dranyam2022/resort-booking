import React from "react";
import styles from "./Navigation.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "../layout/Button";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
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
