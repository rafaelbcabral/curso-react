import Button from "../Button"
import styles from "./styles.module.css"

export default function Card({avatar, name, bio, email, phone, githubUrl, linkedinUrl, twitterUrl}) {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={avatar} alt={name} />
      <h2 className={styles.name}>{name}</h2>
      <hr className={styles.line} />
      <p className={styles.description} >{bio}</p>
      <hr className={styles.line} />
      <p className={styles.description}>{phone}</p>
      <hr className={styles.line} />
      <p className={styles.description}>{email}</p>
      <hr className={styles.line} />
      <Button text="GitHub" href={githubUrl} />
      <Button text="LinkedIn" href={linkedinUrl} />
      <Button text="Twitter" href={twitterUrl} />
    </div>
  )
}