import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import HomePage from '@/pages/HomePage';
import ProductPage from '@/pages/ProductPage';
import ShopPage from '@/pages/ShopPage';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-espresso text-cream-100 flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/journal" element={<JournalPage />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

function AboutPage() {
  return (
    <div className="pt-32 pb-20 max-w-3xl mx-auto px-6 lg:px-10 text-center">
      <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4 font-medium">Our Story</p>
      <h1 className="serif-heading text-3xl md:text-5xl text-cream-100 mb-6">About Velmora</h1>
      <p className="text-cream-300/60 leading-relaxed mb-4">
        Founded in 2024, Velmora is a direct-to-consumer demi-fine jewelry brand based in New York.
        We believe luxury shouldn't come with a luxury markup. Every piece is designed in-house and
        crafted with 18K gold plating on responsibly sourced brass.
      </p>
      <p className="text-cream-300/60 leading-relaxed">
        No middlemen. No markups. Just fine jewelry made to be treasured.
      </p>
    </div>
  );
}

function JournalPage() {
  return (
    <div className="pt-32 pb-20 max-w-3xl mx-auto px-6 lg:px-10 text-center">
      <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4 font-medium">Journal</p>
      <h1 className="serif-heading text-3xl md:text-5xl text-cream-100 mb-6">Stories & Style</h1>
      <p className="text-cream-300/60 leading-relaxed">
        Coming soon — editorial stories, styling guides, and behind-the-scenes from our Manhattan studio.
      </p>
    </div>
  );
}
