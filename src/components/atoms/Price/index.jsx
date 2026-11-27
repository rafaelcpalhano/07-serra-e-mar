import styles from "./price.module.css"

export default function Price({children}) {
  return ( 
  <span className={styles.price}>a partir de <strong>{children}</strong></span>
)}
