import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider, useCart } from '@/context/CartContext';
import Home from '@/pages/home/Home';
import Shop from '@/pages/shop/Shop';
import ProductDetail from '@/pages/product/ProductDetail';
import About from '@/pages/About';
import CartDrawer from '@/components/cart/CartDrawer';
import Navbar from '@/components/layout/Navbar';

function AppContent() {
  const { isOpen } = useCart();

  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/collections" element={<Shop />} />
          <Route path="/journal" element={<About />} />
        </Routes>
      </main>
      <CartDrawer />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
}

export default App;
