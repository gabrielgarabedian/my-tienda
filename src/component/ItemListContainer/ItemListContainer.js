import React from 'react';
import "./ItemListContainer.css";
import ItemList from '../ItemList/ItemList';
import { Link } from "react-router-dom";



const estilos = {itemList:{textAlign: "center",fontSize: "45px",color: "crimson",marginTop: "45px",},}

/*const ItemListContainer = () => {
  const [productos, setProductos ] = useState([]);
  
     
  useEffect (()=>{
      const getProductos = async()=>{
        try {
          const q = query(collection(db, "productos"));
          const querySnapshot = await getDocs (q);
          //console.log(querySnapshot)
          const productos= [];
          querySnapshot.forEach ((productos)=> {
            //console.log(doc.id, "=>", doc.data());
            productos.push({...productos.data(), id: productos.id});
          });
          console.log(productos)
        } catch (error) {
          console.error("Error al obtener los productos:", error);
        }
      };
      getProductos();
  }, []);

  const {categoria} = useParams();
  console.log(categoria)

  const catFilter = productos.filter((producto)=> producto.categoria === categoria );

  return (<>
     <div className='itemContenedor'>
        {categoria? <ItemList productos={catFilter}/>: <itemList productos={productos}/>}
     </div>
     <div>
      <Link to="/">
        <button>Volver al HOME</button>
      </Link>
      <Link to="/contacto">
        <button>Contacto</button>
      </Link>
     </div>
  </>
  ) 
};

export default ItemListContainer;*/


const ItemListContainer = () => {
  /*const [productos, setProductos ] = useState([]);
  
     
  useEffect (()=>{
      const getProductos = async()=>{
        try {
          const q = query(collection(db, "productos"));
          const querySnapshot = await getDocs (q);
          //console.log(querySnapshot)
          const productos= [];
          querySnapshot.forEach ((producto)=> {
            //console.log(doc.id, "=>", doc.data());
            productos.push({...producto.data(), id: producto.id});
          });
          console.log(productos)
        } catch (error) {
          console.error("Error al obtener los productos:", error);
        }
      };
      getProductos();
  }, []);*/
  
  return (<>
     <div className='itemContenedor'>
        <ItemList/>
     </div>
     <div>
      <Link to="/">
        <button>Volver al HOME</button>
      </Link>
      <Link to="/contacto">
        <button>Contacto</button>
      </Link>
     </div>
  </>
  ) 
};

export default ItemListContainer;