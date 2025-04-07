import StatusIndicator from "./components/Status"
import Subtitle from "./components/Subtitle"
import Title from "./components/Title"
import styles from "./App.module.css"

export default function App() {
  let status = true;
  return (
    <div className={status ? styles.app : styles.not}>
      <Title />
      <Subtitle />
      <StatusIndicator />
    </div>
  )
}