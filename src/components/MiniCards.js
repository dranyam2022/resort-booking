import React from "react";
import styles from "./MiniCards.module.css";
import Card from "../layout/Card";

const MiniCards = () => {
  return (
    <div className={styles.container}>
      <Card className="bg--green">
        <h2 className={styles.title}>DESTINATION LUXURY RESPITE</h2>
      </Card>
      <Card className="bg--pink">
        <h3 className={styles.title}>IT'S YOUR OWN. PLAN BIG SHOW</h3>
        <p className={styles.description}>
          We love to orchestrate your wedding events.
        </p>
      </Card>
      <Card className="bg--yellow">
        <h3 className={styles.title}>TRY OUR EXHILARATING SPA & GYM</h3>
        <p className={styles.description}>
          Experience the world greatest recreation in the wrold!
        </p>
      </Card>
      <Card className="bg--orange">
        <h2 className={styles.title}>2K23 SUMMER TRAVEL GUIDE</h2>
        <p className={styles.description}>
          The summer is the perfect time to hit the Beach!
        </p>
      </Card>
    </div>
  );
};

export default MiniCards;
