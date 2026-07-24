import { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import JournalPage from './pages/JournalPage';
import './App.css';

function AppLayout() {
  const [cartOpen, setCartOpen] = useState(false);

  const handleCartClick = useCallback(() => {
    setCartOpen(true);
  }, []);

  const handleCartClose = useCallback(() => {
    setCartOpen(false);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onCartClick={handleCartClick} />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/journal" element={<JournalPage />} />
        </Routes>
      </div>
      <Footer />
      <CartDrawer open={cartOpen} onClose={handleCartClose} />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
