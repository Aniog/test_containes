import { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import HomePage from '@/pages/HomePage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import ShopPage from '@/pages/ShopPage';

function Layout({ children, onCartClick }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onCartClick={onCartClick} />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const openCart = useCallback(() => setCartOpen(true), []);
  const closeCart = useCallback(() => setCartOpen(false), []);

  return (
    <BrowserRouter>
      <CartProvider>
        <Layout onCartClick={openCart}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/journal" element={<JournalPage />} />
          </Routes>
        </Layout>
        <CartDrawer open={cartOpen} onClose={closeCart} />
      </CartProvider>
    </BrowserRouter>
  );
}

function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 md:px-10 pt-24 pb-16">
      <h1 className="font-serif text-4xl font-medium tracking-wide mb-8">Our Story</h1>
      <div className="prose prose-velvet max-w-none">
        <p className="text-lg text-velvet-600 leading-relaxed mb-6">
          Velmora was born from the belief that fine jewelry should be lived in — not locked away. 
          Every piece is crafted with the same attention to detail as luxury houses, priced for the 
          woman building her own collection.
        </p>
        <p className="text-velvet-500 leading-relaxed mb-6">
          We design for quiet confidence. For the ear stack that signals your mood. For the necklace 
          that becomes your signature. Demi-fine, made meaningful. Our 18K gold-plated pieces are 
          hypoallergenic, water-resistant, and designed to be worn every day.
        </p>
        <p className="text-velvet-500 leading-relaxed mb-6">
          Founded in 2024, Velmora is a direct-to-consumer brand that cuts out the traditional 
          markups to bring you premium materials at an attainable price point. Each design is 
          conceived in our New York studio and brought to life by artisan partners who share 
          our commitment to quality.
        </p>
      </div>
    </main>
  );
}

function JournalPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 md:px-10 pt-24 pb-16">
      <h1 className="font-serif text-4xl font-medium tracking-wide mb-8">Journal</h1>
      <p className="text-velvet-500 leading-relaxed">Coming soon — styling guides, care tips, and behind-the-scenes stories from our studio.</p>
    </main>
  );
}
