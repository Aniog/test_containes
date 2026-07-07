import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider, useCart } from './context/CartContext';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Journal from './pages/Journal';
import Toast from './components/ui/Toast';
import './App.css';

// Inner component that can access cart context for toast
function AppContent() {
  const { lastAddedItem, dismissToast } = useCart();

  const toastMessage = lastAddedItem 
    ? `${lastAddedItem.quantity} × ${lastAddedItem.name} added to cart`
    : '';

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
          {/* Fallback to home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
      <Toast 
        message={toastMessage} 
        isVisible={!!lastAddedItem} 
        onClose={dismissToast} 
      />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
