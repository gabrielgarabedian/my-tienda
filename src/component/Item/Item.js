import * as React from 'react';
import {Typography,Card,CardActions,CardContent,CardMedia,Button} from '@mui/material';
import "./Item.css"
import { Link } from 'react-router-dom';

const Item = ({producto})=> {
  return (
    <Card  className='tarjeta' >
    <CardMedia
      sx={{ height: 500 }}
      image={producto.img}
      title={producto.name}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      {producto.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        $ {producto.precio}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">
        <Link to={`/detail/${producto.id}`} >Detalle</Link>
      </Button>
     
    </CardActions>
  </Card>
  );
}

export default Item;