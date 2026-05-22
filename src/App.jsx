import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Categories from '@/components/home/Categories';
import FruitGrid from '@/components/home/FruitGrid';
import Features from '@/components/home/Features';
import ReviewSection from '@/components/reviews/ReviewSection';
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
      <Hero />
      <Categories />
      <FruitGrid />
      <Features />
      <ReviewSection />
      <Footer />
      <CartDrawer onCheckout={() => setCheckoutOpen(true)} />
      <CheckoutModal isOpen={checkoutOpen} onClose={() => setCheckoutOpen(false)} />
    </div>
  );
};

function App() {
  return (
    <CartProvider>
      <AppInner />
    </CartProvider>
  );
}

export default App;
