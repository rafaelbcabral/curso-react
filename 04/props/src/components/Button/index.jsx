import styles from "./styles.module.css"

export default function Button( {text = "Comprar agora"} ) {
  return <button className={styles.wrapper}>{text}</button>
}