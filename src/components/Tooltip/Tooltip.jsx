import React, { useState } from "react";
import styles from "./Tooltip.module.css";

export default function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className={styles.wrapper}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && <span className={styles.tooltip}>{text}</span>}
    </span>
  );
}
