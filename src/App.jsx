import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';

function ScrollToTop() {
  const { pathname } = useLocation();
  return null;
}

function AppLayout() {
  return (
    <>
      <Navigation />
      <CartDrawer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <AppLayout />
      </Router>
    </CartProvider>
  );
}

export default App;
