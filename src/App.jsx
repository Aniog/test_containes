import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import Collections from './pages/Collections.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import { CartProvider } from './context/CartContext.jsx';

function App() {
  console.log("App component rendering"); 
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </Layout>
        <Toaster position="bottom-right" />
      </Router>
    </CartProvider>
  );
}

export default App;
