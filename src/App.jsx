import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Collection from './pages/Collection.jsx';
import { CartProvider } from './context/CartContext.jsx';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/collections/:category" element={<Collection />} />
            <Route path="/collections" element={<Collection />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
