import React, { useState, createContext } from "react";
export const CarritoContext = createContext();

//const initialState = [];

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  return (
    <CarritoContext.Provider value={[ carrito, setCarrito ]}>
      {children}
    </CarritoContext.Provider>
  );
};