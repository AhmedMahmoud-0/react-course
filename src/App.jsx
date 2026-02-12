import { useEffect, useState } from "react";
import "./App.css";
import Products from "./components/Products";
import CartItems from "./components/Cartitems";

const dummyData = [
  {
    id: 1,
    title:
      "MSI Katana 15 HX 15.6” 165Hz QHD+ Gaming Laptop: Intel Core i9-14900HX, NVIDIA Geforce RTX 5070, 32GB DDR5, 1TB NVMe SSD, RGB Keyboard, Win 11 Home: Black B14WGK-016US",
    img: "https://m.media-amazon.com/images/I/71TvKdAmIjL._AC_UL320_.jpg",
    rate: 3,
    price: 5000,
    insteadOf: 7500,
  },
  {
    id: 2,
    title:
      "Skytech Gaming King 95 Desktop PC, Intel i7 14700F 2.1 GHz (5.3GHz), NVIDIA RTX 5070 Ti 16GB, 2TB Gen4 NVMe SSD, 32GB DDR5...",
    img: "https://m.media-amazon.com/images/I/61Bq7N7OuDL._AC_UL320_.jpg",
    rate: 4,
    price: 7000,
    insteadOf: 10000,
  },
  {
    id: 3,
    title:
      "Sponsored Ad - KTC 32 Inch 240Hz Curved Gaming Monitor, 2K 1440P Computer PC Monitor with 1000R 1ms Frameless, Adaptive Sy...",
    img: "https://m.media-amazon.com/images/I/71CZmy792KL._AC_UL320_.jpg",
    rate: 5,
    price: 50000,
    insteadOf: 80000,
  },
];
const initialCartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const App = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cartItems, setCartItems] = useState(initialCartItems);
  useEffect(() => {
    // Call api
    const getData = async () => {
      setIsLoading(true);
      await new Promise((resolve) =>
        setTimeout(resolve, Math.random() * 6000 + 500)
      );
      setProducts(dummyData);
      setIsLoading(false);
    };
    getData();
  }, []);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && products && (
        <Products products={products} setCartItems={setCartItems} />
      )}
      <CartItems cartItems={cartItems} />
    </>
  );
};

export default App;
