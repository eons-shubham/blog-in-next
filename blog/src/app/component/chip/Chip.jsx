import React from "react";
import styles from "./Chip.module.css";

const Chip = ({ category }) => <p className={styles.chip}>{category}</p>;

export default Chip;
