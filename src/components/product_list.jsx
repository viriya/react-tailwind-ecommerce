import { useContext } from "react";
import { ProductContext } from "../context/product.context";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { data, dispatch } = useContext(ProductContext);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
      {data.products.map((p) => (
        <Link to={`product/${p.id}`} key={p.id}>
          <div className="border shadow-lg rounded-lg hover:scale-105 duration-300">
            <img
              src={p.thumbnail}
              alt={p.title}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{p.title}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {p.price}
                </span>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
