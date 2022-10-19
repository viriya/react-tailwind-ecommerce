import { useContext } from "react";
import { ProductContext } from "../context/product.context";
import ProductList from "../components/product_list";

const Home = () => {
  const { data, dispatch } = useContext(ProductContext);
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h2>List of Products</h2>
      {data.loading && !data.error ? <h3>Loading ....</h3> : <ProductList />}
      {data.error ? <h3>{data.error}</h3> : ""}
    </div>
  );
};

export default Home;
