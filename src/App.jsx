import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import Reviews from '@/pages/Reviews';
import CartDrawer from '@/components/store/CartDrawer';
import CheckoutModal from '@/components/store/CheckoutModal';
import { CartProvider } from '@/context/CartContext';
import { Toaster } from '@/components/ui/sonner';

const AppInner = () => {
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Toaster position="bottom-right" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
      <Footer />
      <CartDrawer onCheckout={() => setCheckoutOpen(true)} />
      <CheckoutModal isOpen={checkoutOpen} onClose={() => setCheckoutOpen(false)} />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppInner />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
