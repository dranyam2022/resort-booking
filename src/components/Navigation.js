import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "./Button";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <Logo />
        <ul className={styles.links}>
          <NavLink to="/" className={styles.link}>
            EXPLORE
          </NavLink>
          <NavLink to="/rooms" className={styles.link}>
            ROOMS
          </NavLink>
          <NavLink to="/about" className={styles.link}>
            ABOUT
          </NavLink>
          <NavLink to="/activities" className={styles.link}>
            ACTIVITIES
          </NavLink>
        </ul>
        <Button className={styles.btn}>
          BOOK NOW <AiOutlineArrowRight className={styles.arrowRight} />
        </Button>
      </nav>
    </header>
  );
};

export default Navigation;
