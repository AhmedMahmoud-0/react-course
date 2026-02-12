import Product from "./Product";

/* eslint-disable no-unused-vars */
const Products = ({ products, setCartItems }) => {
  return (
    <div>
      <ul style={{ display: "flex", gap: "16px" }}>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            setCartItems={setCartItems}
          />
        ))}
      </ul>
    </div>
  );
};

export default Products;
