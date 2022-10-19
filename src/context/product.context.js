import { createContext, useReducer } from "react";

const initialState = {
  products: [],
  selectedProduct: null,
  loading: false,
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCHING":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, products: action.payload };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload, products: [] };
    case "SELECT_PRODUCT":
      const prod = state.products.find((prod) => prod.id === action.payload);
      return { ...state, selectedProduct: prod };
    default:
      return state;
  }
};

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, initialState);
  return (
    <ProductContext.Provider value={{ data, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
