import styles from "./Banner.module.css"

import successIcon from '../../assets/Icon-success.png'
import warningIcon from '../../assets/Icon-warning.png'
import neutralIcon from '../../assets/Icon-neutral.png'
import dangerIcon from '../../assets/Icon-error.png'

export default function Banner({
  status = "success",
  title = "Banner Title",
  text = "",
  children
}) {
  let srcPath = ""
  let altText = ""
  switch (status) {
    case "success":
      srcPath = successIcon
      altText = "Success Icon"
      break;
    case "warning":
      srcPath = warningIcon
      altText = "Warning Icon"
      break
    
    case "neutral":
      srcPath = neutralIcon
      altText = "Neutral Icon"
      break
    
    case "error":
      srcPath = dangerIcon
      altText = "Error Icon"
      break
    
    default:
      srcPath = successIcon
      altText = "Success Icon"
  }

  return (
    <article className={`${styles.banner} ${styles[status]}`}>
      <img src={srcPath} alt={altText} />
      <section>
        <h3>{title}</h3>
        {text ? <p>{text}</p> : null}
        {children}
      </section>
    </article>
  )
}
