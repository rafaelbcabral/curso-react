import Button from "./components/Button"
import Card from "./components/Card"
import Subtitle from "./components/Subtitle"
import Title from "./components/Title"
import styles from "./App.module.css"
// import { Fragment } from "react"

export default function App() {
  return (
    // <Fragment>
    <>
      <h1>Exercício 2</h1>
      <div className={styles.app}>
          <Card />
        <div className={styles.content}>
            <Title />
            <Subtitle />
            <Button className={styles.botao}/>
        </div>
      </div>
    </>
    // </Fragment>
  )
}