import { useRef, useState } from "react"
import RefExample from "./refExample"

export default function App(){
  let variable = 0
  const [state, setState] = useState(0)
  const ref = useRef()
  const inputRef = useRef(null);

  const handleClick = () => {
    // Foca o input quando o botão é clicado
    inputRef.current.focus();
  };

  const showValues = () => {
    alert(`
      variavel: ${variable}
      ref: ${ref.current}
      state: ${state}
      `)
  }
  return (
    <div>
      <h2>Exemplo de useRef com o dom</h2>
      <RefExample />
      <hr />
      <h2>Conhecendo o useRef</h2>
      <hr />
      <p>Variavel: {variable}</p>
      <p>ref: {ref.current}</p>
      <p>state: {state}</p>
      <button onClick={() => variable++}>Aumentar Variavel</button>
      <button onClick={() => ref.current++}>Aumentar ref</button>
      <button onClick={() => setState(state => state+1)}>Aumentar state</button>
      <hr />
      <button onClick={showValues}>Exibir valores</button>
      <hr />
      <div style={{ padding: '20px' }}>
      <h2>Exemplo de useRef</h2>
      <input ref={inputRef} type="text" placeholder="Clique no botão para focar aqui" />
      <br /><br />
      <button onClick={handleClick}>Focar no input</button>
      </div>
    </div>
  )
}