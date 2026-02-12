const Cartitem = ({cartItem}) => {
  return (
    <li>
      <img
        src={cartItem.img}
        alt={cartItem.title}
        width="100px"
        height="100px"
      />
      <p>{cartItem.title}</p>
      <p>
        Price: <strong>{Number(cartItem.price).toLocaleString()} جنيه</strong>
      </p>
      <p>
        insteadOf:
        <span style={{ textDecoration: "line-through" }}>
          {cartItem.insteadOf}
          جنيه
        </span>
      </p>
    </li>
  );
};

export default Cartitem;
