import styles from "./styles.module.css";

export default function ProfileAvatar({avatar, name}){
  return (
    <img 
      className={styles.wrapper}
      src={avatar} 
      alt={name} 
    />
  )
}
