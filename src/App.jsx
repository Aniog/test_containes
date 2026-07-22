import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import Home from '@/pages/Home';
import ShopPage from '@/pages/ShopPage';
import ProductDetail from '@/pages/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-[#0F0F0F] text-[#F5F0EB]">
          <Navbar />
          <CartDrawer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
