import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import { ToastProvider } from '@/components/ui/sonner';
import CartDrawer from '@/components/cart/CartDrawer';
import Home from '@/pages/Home';
import ProductDetail from '@/pages/ProductDetail';
import Shop from '@/pages/Shop';

function App() {
  return (
    <Router>
      <ToastProvider>
        <CartProvider>
          <CartDrawer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </CartProvider>
      </ToastProvider>
    </Router>
  );
}

export default App;

