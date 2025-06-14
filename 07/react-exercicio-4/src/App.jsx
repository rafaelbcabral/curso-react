import { useState } from "react"

function App() {
  const[password, setPassword] = useState("")
  const[copyText, setCopyText] = useState("Copiar")
  const [customSize, setCustomSize] = useState()
  const [showInput, setShowInput] = useState(false)

  const passwordSize = showInput ? customSize : 8

  function generate(){
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    let newPassword = ""
    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length) // gerando numero aleatório
      newPassword += characters[position]
    }
    setPassword(newPassword)
    setCopyText("Copiar")
  }

  function copyToClipboard(){
    window.navigator.clipboard.writeText(password) // copiando senha
    setCopyText("Copiado!")
  }

  // let booleana = true
  // if(booleana) return null

  return (
    <div className="app">
      <h1>Gerador de senhas</h1>
      <div>
        <label htmlFor="showInput">Customizar Tamanho:</label>
        <input type="checkbox"
          id="showInput"
          value={showInput}
          onChange={() => setShowInput(currentState => !currentState)}
          />
      </div>
      
      {showInput ? ( // ternário
      <div>
        <label htmlFor="passwordSize">Tamanho: </label>
        <Input passwordSize={customSize} setPasswordSize={setCustomSize}/>
      </div>
      ): 
      null}

      {/* ou 

      {showInput && ( curto circuito
      <div>
        <label htmlFor="passwordSize">Tamanho: </label>
        <Input passwordSize={customSize} setPasswordSize={setCustomSize}/>
      </div>
      )*/}

      <button onClick={generate}>Gerar senha de {passwordSize} caracteres!</button>
      <button onClick={copyToClipboard}>{copyText}</button>
      <div>{password}</div>
    </div>
  )
}

export default App
