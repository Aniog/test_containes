import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import { useState } from 'react';

function App() {
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-velmora-cream font-sans">
          <Header onCartClick={() => setCartDrawerOpen(true)} />
          <CartDrawer isOpen={cartDrawerOpen} onClose={() => setCartDrawerOpen(false)} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
