import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/nav/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <CartDrawer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
