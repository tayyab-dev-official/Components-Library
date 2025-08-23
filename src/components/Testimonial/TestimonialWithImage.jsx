import styles from "./TestimonialWithImage.module.css";
import quoteImg from "../../assets/quote.png";

export default function TestimonialWithImage({
  name = "Sarah Johnson",
  role = "FrontEnd Developer",
  text = "Skilled and experienced developer with 10+ years of experience.",
  avatar,
}) {
  // Limit text to 100 characters
  const limitedText = text?.length > 150 ? text.slice(0, 150) + "..." : text;

  return (
    <article className={styles["testimonial"]}>
      <header className={styles["testimonial-avatar"]}>
        <img src={avatar} alt="Author's avatar" />
      </header>

      <main className={styles["testimonial-main"]}>
        <img
          src={quoteImg}
          style={{ background: "#2545B8" }}
          className={styles["quote"]}
        />
        <p className={styles.text}>{limitedText}</p>
        <div>
          <h4 className={styles["author-name"]}>{name}</h4>
          <span className={styles["author-role"]}>{role}</span>
        </div>
      </main>
    </article>
  );
}
