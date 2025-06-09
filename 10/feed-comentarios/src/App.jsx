import Comentario from "./components/Comentario"
import useComentaryCollection from "./hooks/useComentaryCollection"
import NewComentaryForm from "./components/NewComentaryForm"

export default function App(){
  const { comentario, addComentario } = useComentaryCollection()

  return (
    <div id="app">
      <div id="total">
      <h2>Seção de Comentários</h2>
      <NewComentaryForm addComentario={addComentario} />
      <hr />
      <div className="comentarios">
        {comentario.length > 0
          ? comentario.map((item) => (
            <Comentario 
            key={item.id}
            email={item.email}
            comentario={item.comentario}
            data={item.data}
            />
          ))
          : (
            <h2 style={{margin: "4rem auto"}}>Seja o primeiro a comentar!</h2>
          )
        }
        </div>
      </div>
    </div>
  )
}
