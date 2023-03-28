import React from "react";
import styles from "./CardItem.module.css";

const CardItem = (props) => {
  return (
    <div className={styles.card__container}>
      <img
        src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
        alt="room"
      />

      <div className={styles.card__body}>
        <h3 className={styles.card__title}>My Room</h3>
        <ul className={styles.card__description}>
          {props.description && props.description.length > 0 ? (
            props.description.forEach((desc) => <li>{desc}</li>)
          ) : (
            <li>No descriptions found.</li>
          )}
        </ul>
        <div>View Details</div>
      </div>
    </div>
  );
};

export default CardItem;
