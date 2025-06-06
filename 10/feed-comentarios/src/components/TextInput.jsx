import PropTypes from "prop-types"

TextInput.PropTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func
}

export default function TextInput({ id, label, value, setValue }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {id === "comentario" ? (
        <textarea required
          id={id}
          name={id}
          rows="5"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      ) : (
        <input required
          type="email"
          id={id}
          name={id}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
    </div>
  )
}