
const Button = ({ text, onClick }) => {
  return (
    <button type="button" 
    onClick={onClick} 
    style={{ backgroundColor: 'black', color: "white"}}>
        {text}
    </button>
  )
}

export default Button