import styles from "./styles.module.css"

export default function LinkButton({ href, children }) {
  const HandleClick = () => {
    window.open(href, "_blank");
  }

  return (
    <button 
      className={styles.wrapper} 
      onClick={HandleClick}
    >
        {children}
    </button>
  )
}
