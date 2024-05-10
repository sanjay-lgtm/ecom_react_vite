import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Home from './Pages/HomePage/Home'
import Cart from "./Pages/Cart/Cart";
import Product from "./Pages/Product/Product";
import Header from "./component/Header/Header";

function App() {
  

  return (
    <BrowserRouter>
   <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
