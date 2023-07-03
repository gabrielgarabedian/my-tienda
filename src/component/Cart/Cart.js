import React, { useContext } from 'react';
import {CarritoContext } from "../../Context/Context";
import { Link } from "react-router-dom";
import "./cart.css"
import Formulario from '../Formulario/Formulario';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


export const Cart= () => {
  const [carrito, setCarrito] = useContext(CarritoContext);

  //console.log("de aca ",carrito)
  

  const limpiarCarrito = () => {
    setCarrito([]);
  }

  const borrarProducto = (id) => {
    const nuevoCarrito = carrito.filter((prod) => prod.id !== id);
    setCarrito(nuevoCarrito);
  };
  
  const quantity = carrito.reduce((acc, prod) => {
   return acc + prod.quantity
  }, 0);
  console.log(quantity)

  const totalPagar = carrito.reduce((acc,prod)=>{
    return acc + prod.quantity * prod.precio;
  },0)

  const restar = (id) => {
    const nuevoCarrito = carrito.map((prod) => {
      if (prod.id === id) {
        if (prod.quantity > 1) {
          return  { ...prod,
            quantity: prod.quantity - 1}
        } ;  
      }
      return prod;
    });
    setCarrito(nuevoCarrito);
  };

  const sumar = (id) => {
    const nuevoCarrito = carrito.map((prod) => {
      if (prod.id === id) {
        if (prod.quantity < 5) {
          return  { ...prod,
            quantity: prod.quantity + 1}     
        };
      }
      return prod;
    });
    setCarrito(nuevoCarrito);
  };


  if ( carrito.length === 0)  {
    return (
      <div className='central1'>
        <p className='carritoEstado'>Tu carrito está vacío</p>
        <p className='carritoEstado2'>Para adquirir nuestros productos puedes hacerlo seleccionandolos en nuestra <Link to="/tienda">
          <button className='div-compra2'> Tienda</button></Link></p>
        <Link to="/">
          <button className='div-compra'>Volver al HOME</button>
        </Link>
      </div>
    );
  }else{
    return (
      <div className='central'>
        <h1 className='titulo'> Carrito de compras</h1>
        <div className="tarjetas-container">
          {carrito.map((prod, index) => (
            <Card key={index} sx={{ maxWidth: 700 }}>
              <CardMedia
                sx={{ height: 400 }}
                image={prod.img} 
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cantidad 
                <button onClick={() => restar(prod.id)}><ChevronLeftIcon/></button>
                  {prod.quantity}
                  <button onClick={() => sumar(prod.id)}><ChevronRightIcon/></button>
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  precio unitario: ${prod.precio}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  Subtotal: ${prod.quantity * prod.precio}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  <button onClick={() => borrarProducto(prod.id)}><DeleteForeverIcon/></button>
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
        <button className='div-limpiar' onClick={limpiarCarrito}>Cancelar compra</button>
        <Link to="/tienda">
          <button className='div-compra'>Seguir comprando</button>
        </Link>
        <div className='total'> Total a Pagar $ {totalPagar}</div>
        <Formulario />
        <Link to="/">
          <button className='div-compra'>Volver al HOME</button>
        </Link>
      </div>
    );
  }
}

