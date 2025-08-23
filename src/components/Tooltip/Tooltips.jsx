import Tooltip from './Tooltip'
import TooltipLight from './TooltipLight'
import styles from './Tooltips.module.css'

export default function Tooltips(props){
    return (
      <article {...props}>
        <h2>Tooltip</h2>

        <section className={styles["tooltips-section"]}>
          <Tooltip
            background="#262626"
            title="Course Completed Successfully!"
            text="Congratulations! You have successfully completed the course."
          />

          <Tooltip
            background="#1E40AF"
            title="Course Completed Successfully!"
            text="Congratulations! You have successfully completed the course."
          />

          <Tooltip
            background="#A9229B"
            title="Course Completed Successfully!"
            text="Congratulations! You have successfully completed the course."
          />

          <Tooltip
            background="#47AA5D"
            title="Course Completed Successfully!"
            text="Congratulations! You have successfully completed the course."
          />
        </section>

        <section className={styles["tooltips-section"]}>
          <TooltipLight
            color="#6B7280"
            background="#FFFFFF"
            title="Course Completed Successfully!"
            text="Congratulations! You have successfully completed the course."
          />

          <TooltipLight
            color="#1C51B9"
            background="#E0E7FF"
            title="Course Completed Successfully!"
            text="Congratulations! You have successfully completed the course."
          />

          <TooltipLight
            color="#C7369E"
            background="#FFF3FC"
            title="Course Completed Successfully!"
            text="Congratulations! You have successfully completed the course."
          />

          <TooltipLight
            color="#3C8C4E"
            background="#E7FFF3"
            title="Course Completed Successfully!"
            text="Congratulations! You have successfully completed the course."
          />
        </section>
      </article>
    );
}