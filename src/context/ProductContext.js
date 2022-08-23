import React, { createContext, useState, useEffect } from "react";

// create context
const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  // the value that will be given to the context
  const [products, setProducts] = useState([]);


  // fetch a user from a fake backend API
  useEffect(() => {
    const fetchProducts = () => {
      // this would usually be your own backend, or localStorage
      // for example
      fetch('https://fakestoreapi.com/products?limit=5')
        .then((response) => response.json())
        .then((result) => (
          setProducts(result)
        ))
        .catch((error) => console.log("An error occured"));
    };

    fetchProducts();
  }, []);

  return (
    // the Provider gives access to the context to its children
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductContextProvider };