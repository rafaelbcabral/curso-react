import LinkButton from "../LinkButton"
import Title from "../Title"
import ProfileAvatar from "./ProfileAvatar"
import ProfileSection from "./ProfileSection"
import styles from "./styles.module.css"

function HandleClickFollow(ev){
  console.log(ev)
  return alert("You are is follow now.")
}

export default function Card({avatar, name, bio, email, phone, githubUrl, linkedinUrl, twitterUrl}) {
  
  return (
    <div className={styles.container}>
      <ProfileAvatar avatar={avatar} name={name} />

      <Title>
        <span>{name}</span>
        <button
          className={styles.followButton}
          onClick={HandleClickFollow}
        >
          Follow
        </button>
      </Title>

      <ProfileSection>{bio}</ProfileSection>
      <ProfileSection>{email}</ProfileSection>
      <ProfileSection>{phone}</ProfileSection>

      <LinkButton href={githubUrl}>GitHub</LinkButton>
      <LinkButton href={linkedinUrl}>LinkedIn</LinkButton>
      <LinkButton href={twitterUrl}>Twitter</LinkButton>
    </div>
  )
}