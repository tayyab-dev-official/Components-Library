import styles from "./Card.module.css";

import cardImage from '../../assets/Brand icon.png'

export default function Card({
  icon = cardImage,
  backgroundColor = "#3F75FE",
  title = "Card Title",
  text = "Card Description",
  children,
}) {
  return (
    <article className={styles["card"]}>
      <section className={styles["card-icon"]} style={{ backgroundColor }}>
        <img src={icon} alt="Card Icon" />
      </section>
      <section className={styles["card-details"]}>
        <p className={styles["title"]}>{title}</p>
        <p className={styles["text"]}>{text}</p>
      </section>
      {children}
    </article>
  );
}
