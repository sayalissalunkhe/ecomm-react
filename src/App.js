import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './Main.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import { AppProvider } from "./context/productContext";
import { FilterContextProvider } from "./context/FilterContext";
import SingleProduct from './pages/SingleProduct';
import Product from './pages/Product';

function App() {
  return (
    <AppProvider>
      <FilterContextProvider>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/singleproduct/:id' element={<SingleProduct />} />
          <Route path='/product' element={<Product />} />
        </Routes>
      </FilterContextProvider>
    </AppProvider>
  );
}

export default App;