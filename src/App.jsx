import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './Layout';
import HomePage from './pages/HomePage';
import CollectionPage from './pages/CollectionPage';
import ProductPage from './pages/ProductPage';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="shop" element={<CollectionPage />} />
            <Route path="product/:id" element={<ProductPage />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
