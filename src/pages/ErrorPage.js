import React from "react";
import styles from "./ErrorPage.module.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        Sorry, the page you requested does not exist. Kindly click{" "}
        <span>
          <Link to="/">HERE</Link>
        </span>{" "}
        to navigate back to the home page or check your internet connection.
      </p>
    </div>
  );
};

export default ErrorPage;
