import React from "react";
import styles from "./Rooms.module.css";
import Section from "../../layout/Section";
import Container from "../../layout/Container";
import SortBy from "../../components/SortBy";

const Rooms = () => {
  return (
    <>
      <Section bgColor="bg--primary-variant">
        <Container>
          <div className={styles.container}>
            <h2 className={styles.title}>Rooms & Suites</h2>
            <p className={styles.text}>
              Wave Resort and Spa offers 20 immaculate guest rooms and suites.
              Accommodations have a contemporary resort ambience with
              traditional Filipino accents and feature outstanding views of the
              ocean or gardens.
            </p>
          </div>
          <SortBy />
        </Container>
      </Section>
    </>
  );
};

export default Rooms;
