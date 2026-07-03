import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';
import HomePage from '@/pages/HomePage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import ShopPage from '@/pages/ShopPage';

function AboutPage() {
  return (
    <main className="min-h-screen bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <p className="label text-gold-500 mb-4">Our Story</p>
        <h1 className="heading-1 text-charcoal-900 mb-6">About Velmora</h1>
        <p className="body-text text-charcoal-700 max-w-2xl mx-auto">
          Velmora was founded with a singular belief: luxury should be worn, not kept behind glass. We craft demi-fine jewelry that moves with you — from morning coffee to evening out. Every piece is hand-finished by skilled artisans using 18K gold plating over hypoallergenic materials. Designed in our studio. Treasured by you.
        </p>
      </div>
    </main>
  );
}

function JournalPage() {
  return (
    <main className="min-h-screen bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <p className="label text-gold-500 mb-4">Journal</p>
        <h1 className="heading-1 text-charcoal-900 mb-6">Stories & Inspiration</h1>
        <p className="body-text text-charcoal-700 max-w-2xl mx-auto">
          Styling guides, behind-the-scenes, and the moments that inspire our collections. Coming soon.
        </p>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-cream-50">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:slug" element={<ProductDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/journal" element={<JournalPage />} />
            </Routes>
          </div>
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
