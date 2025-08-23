import { useState } from 'react'

import styles from "./Tooltip.module.css"
import tooltipIcon from '../../assets/tooltip-icon.png'
import crossIcon from '../../assets/cross.png'

export default function Tooltip({
  color="#E7FFF3",
  background="#262626",
  title = "Archive notes",
  text = "Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur.",
}) {
  const [visible, setVisible] = useState(true)

  function toggle() {
    setVisible(prevState => !prevState)
  }

  return visible ? (
    <article className={styles["tooltip"]}>
      <section className={styles["tooltip-main"]} style={{ background }}>
        <img src={tooltipIcon} alt="envelope icon" className="tooltip-icon" />
        <div className={styles["tooltip-main-content"]}>
          <h4 className={styles["tooltip-title"]} style={{ color }}>
            {title}
          </h4>
          <p className={styles["tooltip-text"]} style={{ color }}>
            {text}
          </p>
        </div>
        <img
          src={crossIcon}
          alt="close icon"
          className="cross-icon"
          onClick={toggle}
        />
      </section>
      <section className={styles["triangle"]} style={{ background }}></section>
    </article>
  ) : null;
}
