const Button = ({ text, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ backgroundColor: "white", color: "black" }}
    >
      {text}
    </button>
  );
};

export default Button;
