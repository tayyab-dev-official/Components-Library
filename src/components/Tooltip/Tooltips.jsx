import Tooltip from "./Tooltip";
import TooltipLight from "./TooltipLight";
import styles from "./Tooltips.module.css";

export default function Tooltips(props) {
  return (
    <article {...props}>
      <h2>Tooltip</h2>

      <section className={styles["tooltips-section"]}>
        <Tooltip
          background="#262626"
          title="Save Changes"
          text="Click to save your progress and continue working later."
        />

        <Tooltip
          background="#1E40AF"
          title="Save Changes"
          text="Click to save your progress and continue working later."
        />

        <Tooltip
          background="#A9229B"
          title="Save Changes"
          text="Click to save your progress and continue working later."
        />

        <Tooltip
          background="#47AA5D"
          title="Save Changes"
          text="Click to save your progress and continue working later."
        />
      </section>

      <section className={styles["tooltips-section"]}>
        <TooltipLight
          color="#6B7280"
          background="#FFFFFF"
          title="Save Changes"
          text="Click to save your progress and continue working later."
        />

        <TooltipLight
          color="#1C51B9"
          background="#E0E7FF"
          title="Save Changes"
          text="Click to save your progress and continue working later."
        />

        <TooltipLight
          color="#C7369E"
          background="#FFF3FC"
          title="Save Changes"
          text="Click to save your progress and continue working later."
        />

        <TooltipLight
          color="#3C8C4E"
          background="#E7FFF3"
          title="Save Changes"
          text="Click to save your progress and continue working later."
        />
      </section>
    </article>
  );
}
