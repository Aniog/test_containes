import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/ui/CartDrawer';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import Collections from '@/pages/Collections';
import About from '@/pages/About';
import Journal from '@/pages/Journal';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
        <Footer />
        <CartDrawer />
      </Router>
    </CartProvider>
  );
}

export default App;
