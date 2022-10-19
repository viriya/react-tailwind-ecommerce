import { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/navbar2";
import { ProductContext } from "./context/product.context";
import Home from "./pages/home";
import ProductItem from "./components/product_item";

const App = () => {
  const { data, dispatch } = useContext(ProductContext);
  useEffect(() => {
    const fetch = async () => {
      try {
        dispatch({ type: "FETCHING" });
        const resp = await axios.get("https://dummyjson.com/products");
        dispatch({ type: "FETCH_SUCCESS", payload: resp.data.products });
      } catch (e) {
        dispatch({ type: "FETCH_FAIL", payload: e.message });
      }
    };
    fetch();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<ProductItem />} />
      </Routes>
    </>
  );
};

export default App;
