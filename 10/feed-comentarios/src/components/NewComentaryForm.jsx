import PropTypes from "prop-types";
import { useState } from "react";
import TextInput from "./TextInput"


NewComentaryForm.PropTypes = {
  addComentario: PropTypes.func
}

export default function NewComentaryForm( { addComentario }){

  const [email, setEmail] = useState("");
  const [comentario, setComentario] = useState("");
  
  const handleSubmit = (ev) => {
    ev.preventDefault()
    addComentario( { email, comentario })
    setEmail("")
    setComentario("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextInput id="email" label="E-mail" value={email} setValue={setEmail} />
      <TextInput id="comentario" label="comentário" value={comentario} setValue={setComentario} />
    <button type="submit">Adicionar comentário.</button>
    </form>
  )
}