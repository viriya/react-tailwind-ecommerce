import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/product.context";

const ProductItem = () => {
  const { id } = useParams();
  const { data, dispatch } = useContext(ProductContext);

  useEffect(() => {
    dispatch({ type: "SELECT_PRODUCT", payload: parseInt(id) });
  }, []);

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      {data.selectedProduct ? (
        <img src={data.selectedProduct.images[0]} />
      ) : (
        "Loading . . ."
      )}
    </div>
  );
};

export default ProductItem;
