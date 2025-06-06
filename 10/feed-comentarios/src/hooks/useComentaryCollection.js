import { useState } from "react"

export default function useComentaryCollection(){
  const [comentario, setComentario] = useState(() => {
    const storedComentario = localStorage.getItem("obc-comment-lib")
    return !storedComentario? [] : JSON.parse(storedComentario)
  })
  
    const addComentario = ({ email, comentario}) => {
    const id = Math.floor(Math.random() * 100000)
    const data = new Date().toLocaleString()

    const comentarioOficial = { id, email, comentario, data }
    setComentario(state => {
    const newState = [ comentarioOficial, ...state]
    localStorage.setItem("obc-comment-lib", JSON.stringify(newState))
    return newState
    })
  }

    return { comentario, addComentario }
  }
