import PropTypes from "prop-types"

Comentario.propTypes = {
  email: PropTypes.string,
  comentario: PropTypes.string,
  data: PropTypes.string
}

export default function Comentario({ email, comentario, data }) {
  return (
    <div>
    <div>
      <script>console.log({data})</script>
      <h2>{email}</h2>
      <p>Em {data}.</p>
      <p>{comentario}</p>
      <hr />
    </div>
  </div>
  )
}