import styles from "./Badge.module.css"
export default function Badge({color="primary", children}) {
  return (
    <span className={`${styles.badge} ${styles.pill} ${styles[color]}`}>
      {children}
    </span>
  );
}