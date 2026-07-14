import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout/Layout';
import HomePage from './components/Home/HomePage';
import ProductDetail from './components/Product/ProductDetail';
import ShopPage from './components/Shop/ShopPage';
import About from './pages/About';
import Journal from './pages/Journal';
import CartDrawer from './components/Cart/CartDrawer';

function App() {
  return (
    <CartProvider>
      <Router>
        <CartDrawer />
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/shop' element={<ShopPage />} />
            <Route path='/product/:id' element={<ProductDetail />} />
            <Route path='/about' element={<About />} />
            <Route path='/journal' element={<Journal />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
