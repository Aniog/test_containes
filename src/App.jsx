import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-ivory-50 text-ink-800">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              {/* Placeholder routes for future pages */}
              <Route path="/about" element={<PlaceholderPage title="Our Story" />} />
              <Route path="/journal" element={<PlaceholderPage title="Journal" />} />
              <Route path="/shipping" element={<PlaceholderPage title="Shipping & Returns" />} />
              <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
              <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
            </Routes>
          </div>
          <Footer />
          <CartDrawer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

function PlaceholderPage({ title }) {
  return (
    <main className="pt-24 pb-16 flex items-center justify-center min-h-[60vh]">
      <div className="text-center px-4">
        <h1 className="font-serif text-4xl md:text-5xl text-ink-800 mb-4">{title}</h1>
        <p className="text-ink-500 mb-8">This page is coming soon.</p>
        <a href="/" className="btn-outline">
          Back to Home
        </a>
      </div>
    </main>
  );
}

export default App;
