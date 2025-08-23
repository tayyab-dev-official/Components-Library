import styles from "./TestimonialWithoutImage.module.css";

import companyLogo from '../../assets/Mark.png'



export default function TestimonialWithImage({
  name = "Sarah Johnson",
  role = "FrontEnd Developer",
  text = "Skilled and experienced developer with 10+ years of experience."
}) {
  
  return (
    <article className={styles["testimonial"]}>
      <main className={styles["testimonial-main"]}>
        <header className={styles["logo"]}>
          <img src={companyLogo} alt="Comany Logo" />
          <p>
            Work
            <span className={styles["logo-part"]}>cation</span>
          </p>
        </header>
        <p className={styles.text}>{`"${text}"`}</p>
        <div className={styles["testimonial-author"]}>
          <span className={styles["author-name"]}>{name}</span>
          <span className={styles["author-role"]}>{role}</span>
        </div>
      </main>
    </article>
  );
}
