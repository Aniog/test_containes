import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Collection from './pages/Collection';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/shop" element={<Collection />} />
              {/* Placeholder routes for nav links */}
              <Route path="/about" element={<ComingSoon title="Our Story" />} />
              <Route path="/journal" element={<ComingSoon title="Journal" />} />
              <Route path="/shipping" element={<ComingSoon title="Shipping & Returns" />} />
              <Route path="/size-guide" element={<ComingSoon title="Size Guide" />} />
              <Route path="/care" element={<ComingSoon title="Care Instructions" />} />
              <Route path="/contact" element={<ComingSoon title="Contact Us" />} />
              <Route path="/faq" element={<ComingSoon title="FAQ" />} />
              <Route path="/sustainability" element={<ComingSoon title="Sustainability" />} />
              <Route path="/careers" element={<ComingSoon title="Careers" />} />
              {/* Catch all */}
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

// Placeholder for pages that are linked but not fully implemented
function ComingSoon({ title }) {
  return (
    <main className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center">
        <h1 className="font-serif text-3xl md:text-4xl mb-4">{title}</h1>
        <p className="text-[var(--color-secondary)]">This page is coming soon.</p>
      </div>
    </main>
  );
}

export default App
