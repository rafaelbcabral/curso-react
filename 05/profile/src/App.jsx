import Profile from "./components/Profile"
import Avatar from "./assets/avatar.jpeg"

export default function App() {
  return (
    <>
      <Profile
        avatar= {Avatar}
        name="Rafael Cabral"
        bio="Developer Python Full-Stack at ActiveCare INC."
        email="rafael1311cabral@gmail.com"
        phone="+55 (22) 98810-3858"
        githubUrl="https://github.com/rafaelbcabral"
        linkedinUrl="https://www.linkedin.com/in/rafael-b-cabral"
        twitterUrl="https://twitter.com"
      />
    </>
  )
}