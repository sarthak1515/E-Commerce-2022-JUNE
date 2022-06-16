import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home';
import Productlist from './pages/Productlist';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import {BrowserRouter as Router,Link,Routes,Route} from "react-router-dom"
function App() {
  return (
   <Router>
    <Link to="/"></Link>
    <Link to="/cart"></Link>
    <Link to="/login"></Link>
    <Link to="/register"></Link>
    <Link to="/singleproduct"></Link>
    <Link to="/multipleproduct"></Link>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/singleproduct' element={<Product/>}></Route>
      <Route path='/multipleproduct' element={<Productlist/>}></Route>
    </Routes>
   </Router>
  );
}

export default App;
