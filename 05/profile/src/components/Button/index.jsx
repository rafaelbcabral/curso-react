import styles from "./styles.module.css"

export default function Button({ text, href }) {
  const handleClick = () => {
    window.location.href = href
  }

  return (
    <button className={styles.wrapper} onClick={handleClick}>
      {text}
    </button>
  )
}
