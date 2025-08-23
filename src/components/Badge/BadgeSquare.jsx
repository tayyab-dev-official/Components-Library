import styles from "./Badge.module.css"
export default function Badge({color="primary", children}) {
  return (
    <span className={`${styles.badge} ${styles.square} ${styles[color]}`}>
      {children}
    </span>
  );
}