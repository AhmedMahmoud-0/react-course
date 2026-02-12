import toast from "react-hot-toast";
import starIcon from "../assets/icons/icons8-star-48.png";

const Product = ({ product, setCartItems }) => {
  const handleClick = (product) => {
    toast("تم اضافه المنتج");
    setCartItems((prev) => {
      return [...prev, product];
    });
  };
  return (
    <li>
      <img src={product.img} alt={product.title} width="100px" height="100px" />
      <p>{product.title}</p>
      <p>
        Rate: {product.rate}
        {Array(product.rate)
          .fill(0)
          .map((_, index) => (
            <img
              key={index}
              src={starIcon}
              alt="Star Icon"
              width="16px"
              height="16px"
            />
          ))}
      </p>
      <p>
        Price: <strong>{Number(product.price).toLocaleString()} جنيه</strong>
      </p>
      <p>
        insteadOf:
        <span style={{ textDecoration: "line-through" }}>
          {product.insteadOf}
          جنيه
        </span>
      </p>
      <button type="button" onClick={() => handleClick(product)}>
        اضف الي العربه
      </button>
    </li>
  );
};

export default Product;
