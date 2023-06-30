import React, { useState, createContext } from "react";
export const ProductosContext = createContext();

const initialState = [];

export const ProductosProvider = ({ children }) => {
  const [producto, setProducto] = useState([initialState]);

  return (
    <ProductosContext.Provider value={{ producto, setProducto }}>
      {children}
    </ProductosContext.Provider>
  );
};