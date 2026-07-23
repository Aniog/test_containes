import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import SearchModal from '@/components/SearchModal';
import HomePage from '@/pages/HomePage';
import ShopPage from '@/pages/ShopPage';
import ProductPage from '@/pages/ProductPage';
import { products } from '@/data/products';

// Make products available globally for cart context
window.__VELMORA_PRODUCTS = products;

function AppContent() {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onCartOpen={() => setCartOpen(true)} onSearchOpen={() => setSearchOpen(true)} />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/journal" element={<JournalPage />} />
        </Routes>
      </div>

      <Footer />
      <Toaster position="bottom-right" richColors />
    </div>
  );
}

function AboutPage() {
  return (
    <main className="pt-20 md:pt-24">
      <div className="container-wide py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-amber-700 text-sm tracking-[0.3em] uppercase mb-4">Our Story</p>
          <h1 className="serif-heading text-4xl md:text-6xl text-stone-900 mb-8">
            The Art of<br />Everyday Luxury
          </h1>
          <div className="space-y-6 text-stone-600 leading-relaxed">
            <p>
              Velmora was founded with a singular vision: to make fine jewelry accessible without compromising on quality or design. We believe that the pieces you wear every day should be as thoughtfully crafted as the ones reserved for special occasions.
            </p>
            <p>
              Each Velmora piece begins as a sketch in our studio, where our designers draw inspiration from architecture, nature, and the quiet moments of everyday life. The result is jewelry that feels both timeless and contemporary — pieces you'll reach for again and again.
            </p>
            <p>
              We use 18K gold plating over responsibly sourced brass, ensuring our jewelry is both beautiful and hypoallergenic. Every piece undergoes rigorous quality testing before it reaches you.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

function JournalPage() {
  return (
    <main className="pt-20 md:pt-24">
      <div className="container-wide py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-amber-700 text-sm tracking-[0.3em] uppercase mb-4">The Journal</p>
          <h1 className="serif-heading text-4xl md:text-6xl text-stone-900 mb-8">
            Stories &<br />Styling
          </h1>
          <p className="text-stone-500">Coming soon — styling tips, behind-the-scenes, and the stories behind our collections.</p>
        </div>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </Router>
  );
}
