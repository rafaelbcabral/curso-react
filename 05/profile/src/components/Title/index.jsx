import styles from "./styles.module.css"

export default function Title(props){
  return ( 
    <div 
      className={styles.wrapper}
    >
      {props.children}
    </div>
  )
}