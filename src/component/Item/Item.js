import React, { useContext } from 'react';
import { Typography, Card, CardActions, CardContent, CardMedia, Button } from '@mui/material';
import "./Item.css";
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../Context/Context';
//sweetAlert2
import Swal from 'sweetalert2';

const Item = ({ producto }) => {
   const [ setCarrito] = useContext(CarritoContext);

   const agregarCarrito = () => {
    setCarrito((productoAgregado) => {
      const productoElegido = productoAgregado.find((prod) => prod.id === producto.id);
      if (productoElegido) {
        return productoAgregado.map((prod) => {
          if (prod.id === producto.id) {
            return { ...prod, quantity: prod.quantity + 1 };
          } else {
            return prod;
          }
        });
      } else {
        return [...productoAgregado, { ...producto, quantity: 1 }];
      }
    });

    Swal.fire({
      icon: 'success',
      title: 'Producto agregado al carrito',
      showConfirmButton: false,
      timer: 1500
    });
  };

   return (
    <Card className='tarjeta' sx={{ maxWidth: 600 }}>
      <Link to={`/detail/${producto.id}`}>
        <CardMedia
          sx={{ height: 710 }}
          image={producto.img}
          title= "Haz click para ir al detalle"
        />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {producto.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $ {producto.precio}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" onClick={agregarCarrito}>Agregar al Carrito</Button>
      </CardActions>
    </Card>
  );
}
 export default Item;




