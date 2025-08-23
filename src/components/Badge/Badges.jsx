import Badge from './Badge'
import BadgeSquare from './BadgeSquare'
import BadgePill from './BadgePill'
import styles from "./Badges.module.css"

export default function Badges(props){
    return (
      <article {...props}>
        <h2>Badges</h2>

        <section className={styles["component-section"]}>
          <Badge color="primary">
            New
          </Badge>
          <Badge color="success">
            Live
          </Badge>
          <Badge color="warning">
            Beta
          </Badge>
          <Badge color="danger">
            Error
          </Badge>
        </section>

        <section className={styles["component-section"]}>
          <BadgeSquare color="gray">Badge</BadgeSquare>
          <BadgeSquare color="red">Badge</BadgeSquare>
          <BadgeSquare color="yellow">Badge</BadgeSquare>
          <BadgeSquare color="green">Badge</BadgeSquare>
          <BadgeSquare color="blue">Badge</BadgeSquare>
          <BadgeSquare color="indigo">Badge</BadgeSquare>
          <BadgeSquare color="purple">Badge</BadgeSquare>
          <BadgeSquare color="pink">Badge</BadgeSquare>
        </section>

        <section className={styles["component-section"]}>
          <BadgePill color="gray" >
            Badge
          </BadgePill>
          <BadgePill color="red" >
            Badge
          </BadgePill>
          <BadgePill color="yellow" >
            Badge
          </BadgePill>
          <BadgePill color="green" >
            Badge
          </BadgePill>
          <BadgePill color="blue" >
            Badge
          </BadgePill>
          <BadgePill color="indigo" >
            Badge
          </BadgePill>
          <BadgePill color="purple" >
            Badge
          </BadgePill>
          <BadgePill color="pink" >
            Badge
          </BadgePill>
        </section>
      </article>
    );
}