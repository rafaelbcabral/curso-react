import posterImg from "../img/poster.jpg"

const Card = () => {
  return (
    <img
      style={{
        maxWidth: "40%",
        border: "5px solid black",
    }}
    src={posterImg} alt="Poster" />
  )
}


export default Card;