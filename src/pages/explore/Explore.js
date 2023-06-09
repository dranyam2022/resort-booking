import React from "react";
import styles from "./Explore.module.css";
import HeroCard from "../../components/HeroCard";
import MiniCards from "../../components/MiniCards";
import Container from "../../layout/Container";
import Section from "../../layout/Section";
import Button from "../../components/Button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GiSurferVan } from "react-icons/gi";

const Explore = () => {
  return (
    <>
      <Section bgColor="bg--primary">
        <Container>
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
                  loading="lazy"
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
                <div>
                  <div>
                    <h2>Service</h2>
                    <span>OFFERS</span>
                  </div>
                  <h2>WE PROVIDE</h2>
                </div>
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
    </>
  );
};

export default Explore;
