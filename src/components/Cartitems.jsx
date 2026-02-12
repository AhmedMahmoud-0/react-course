import CartItem from "./Cartitem";

const CartItems = ({ cartItems }) => {
  return (
    <div>
      <h1>Cart {cartItems.length}</h1>
      <ul style={{ display: "flex", gap: "16px" }}>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
