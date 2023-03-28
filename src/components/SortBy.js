import React, { useState } from "react";
import styles from "./SortBy.module.css";
import SortContent from "./SortContent";

const SortBy = () => {
  const [sortedBy, setSortedBy] = useState("all");
  return (
    <div>
      <ul className={styles.container}>
        <li>All</li>
        <li>Rooms</li>
        <li>Club Rooms</li>
        <li>Suites</li>
        <li>Connecting Room</li>
      </ul>
      <SortContent sort={sortedBy} />
    </div>
  );
};

export default SortBy;
