import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-cream flex flex-col">
          <Navbar />
          <CartDrawer />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

