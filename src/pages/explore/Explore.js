import React from "react";
import styles from "./Explore.module.css";
import HeroCard from "../../components/HeroCard";
import MiniCards from "../../components/MiniCards";
import Navigation from "../../components/Navigation";
import Container from "../../layout/Container";
import Section from "../../layout/Section";
import Button from "../../components/Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GiSurferVan } from "react-icons/gi";
import { BsTelephone } from "react-icons/bs";
import Logo from "../../components/Logo";

const Explore = () => {
  return (
    <>
      <Section bgColor="bg--primary">
        <Container>
          <Navigation />
          <HeroCard />
          <MiniCards />
        </Container>
      </Section>
      <Section bgColor="bg--primary-variant">
        <Container>
          <div className={styles.content}>
            <div className={styles.tour}>
              <p className={styles.inspiration}>
                We let ourselves be inspired by thee history as well as by
                contemporary artist of the city.
              </p>
              <div className={styles.links}>
                <span>FREE WIFI</span>
                <span>BREAKFAST</span>
              </div>
              <div className={styles.banner}>
                <img
                  src="https://images.unsplash.com/photo-1669577445311-9375cc87fb19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
                  alt="Tour Sign"
                />
                <div className={styles.banner__title}>
                  <h3>CITY TOUR GUIDE</h3>
                  <GiSurferVan />
                </div>
              </div>
            </div>

            <div className={styles.house}></div>

            <div className={styles.services}>
              <div className={styles.services__title}>
                <p>
                  <div>
                    <h2>Service</h2>
                    <span>OFFERS</span>
                  </div>
                  <h2>WE PROVIDE</h2>
                </p>
              </div>

              <div className={styles.services__text}>
                <p>
                  Wave provides aesthetic beach house to our international
                  Tourist and Event organizer.
                </p>
                <Button color="onSecondary">
                  SEE ALL SERVICES
                  <AiOutlineArrowRight />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Section bgColor="bg--primary">
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
              &copy; 2023 Nard Studio | All Rights Reserved
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Explore;
