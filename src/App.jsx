import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/nav/Navbar';
import CartDrawer from '@/components/cart/CartDrawer';
import Footer from '@/components/common/Footer';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import './App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <CartDrawer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
