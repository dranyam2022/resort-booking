import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "./Button";
import Logo from "./Logo";

const Navigation = () => {
  const classes = ({ isActive }) => (isActive ? styles.active : undefined);

  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <Logo />
        <ul className={styles.links}>
          <NavLink to="/" className={classes} end>
            EXPLORE
          </NavLink>
          <NavLink to="/rooms" className={classes}>
            ROOMS
          </NavLink>
          <NavLink to="/activities" className={classes}>
            ACTIVITIES
          </NavLink>
          <NavLink to="/about" className={classes}>
            ABOUT
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
