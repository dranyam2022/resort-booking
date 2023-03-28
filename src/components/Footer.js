import React from "react";
import styles from "./Footer.module.css";
import Container from "../layout/Container";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import Logo from "./Logo";
import Button from "./Button";

const Footer = () => {
  const copyRightDate = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer}>
          <div className={styles.footer__top}>
            <h2>CALL FOR BOOKING</h2>
            <div className={styles.footer__btn}>
              <div>
                <span>
                  <BsTelephone />
                </span>
                (555) 555-1234
              </div>
              <Button>
                BOOK NOW
                <AiOutlineArrowRight />
              </Button>
            </div>
          </div>
          <ul className={styles.footer__links}>
            <li className={styles.footer__link}>OUR STORY</li>
            <li className={styles.footer__link}>PACKAGES</li>
            <li className={styles.footer__link}>SERVICES</li>
            <li>
              <Logo />
            </li>
            <li className={styles.footer__link}>FEATURE</li>
            <li className={styles.footer__link}>GALLERY</li>
            <li className={styles.footer__link}>CONTACT</li>
          </ul>
          <p className={styles.copyRight}>
            &copy; {copyRightDate} Resort Booking | All Rights Reserved
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
