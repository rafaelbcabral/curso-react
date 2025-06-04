import './App.css'
import useCounter from './hooks/useCounter';


function App() {
  const { count, increment } = useCounter()
  let someState

  // if (count > 10) {
  //   someState = useState("MAIOR QUE 10")
  // }

  return (
    <>
      <h1>Vite + React {someState}</h1>
      <div className="card">
        <button onClick={increment}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App