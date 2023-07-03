import React, { useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig"; 
import AlertExitoso from '../AlertExitoso.js/AlertExitoso';
import "./formulario.css";
import {CarritoContext } from "../../Context/Context";

const initialState = {
  name: "",
  lastName: "",
};

const Formulario = () => {
  const [carrito, setCarrito] = useContext(CarritoContext);
  console.log(carrito);

  const [values, setValues] = useState(initialState);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const [ordenPedidoID, setOrdenPedidoID] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (values.name === "" || values.mail === ""){
      alert ("campo invalido")
    }
    else{
      const docRef = await addDoc(collection(db, "ordenPedido"), {
        values,
      });
      setOrdenPedidoID(docRef.id);
      setTimeout(() => {
        setCarrito([]); 
      }, 3900);
    }
    //console.log(values)
    //console.log("Document written with ID: ", docRef.id);
    setValues(initialState);
  };

   return (
    <div className='contenedor-form'>
      <h1 className='titulo-form'>Completa el formulario para finalizar la compra:</h1>
      <form onSubmit={onSubmit} className="FormContainer">
        
        <TextField className='form-nombre'
          placeholder="Nombre y Apellido"
          style={{ margin: 10, width: 300 ,}}
          name="name"
          value={values.name}
          onChange={handleOnChange}
        />
        <TextField
          placeholder="Mail"
          style={{ margin: 10, width: 300 }}
          name="mail"
          value={values.mail}
          onChange={handleOnChange}
        />
        <button className='div-confirmar' type="submit">
          Confirmar Compra
        </button>
      </form>
      {ordenPedidoID && <AlertExitoso ordenPedidoID={ordenPedidoID} />}
    </div>
  );
};
 export default Formulario;