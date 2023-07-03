import './App.css'; 
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import NavBar from './component/NavBar/NavBar';
//rutas
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/Home/Home';
import ContactoPage from './pages/Contacto/Contacto';
import { Cart } from './component/Cart/Cart';
import DetailPage from './pages/DetailPage/DetailPage';
import {CarritoProvider} from "./Context/Context";

const App = ()=> {
  
  return (
    <>
    <CarritoProvider>
    <Router>
        <div className="App">
          <Header/>
          <NavBar/>
          <Routes>
            <Route path="/" element= {<HomePage/>}/>
            <Route path="/contacto" element= {<ContactoPage/>}/>
            <Route path="/tienda" element= { <ItemListContainer/>}/>
            <Route path="/cart" element= {<Cart/>}/>
            <Route path="/detail/:id" element= {<DetailPage/>}/>
          </Routes>
          <Footer/>
        </div>
    </Router>
    </CarritoProvider>
    </>
  );
}

export default App;
