import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navigation from './components/navigation/Navigation';
import Footer from './components/navigation/Footer';
import CartDrawer from './components/shared/CartDrawer';
import HomePage from './components/home/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './components/product/ProductDetailPage';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/collections" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          {/* Placeholder routes */}
          <Route path="/about" element={<ComingSoon title="About Us" />} />
          <Route path="/journal" element={<ComingSoon title="Journal" />} />
          <Route path="/contact" element={<ComingSoon title="Contact" />} />
          <Route path="/shipping" element={<ComingSoon title="Shipping & Returns" />} />
          <Route path="/faq" element={<ComingSoon title="FAQ" />} />
        </Routes>
        <Footer />
        <CartDrawer />
      </CartProvider>
    </BrowserRouter>
  );
}

// Placeholder component for unimplemented pages
function ComingSoon({ title }) {
  return (
    <main className="pt-20 md:pt-24 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1
          className="text-3xl md:text-4xl text-[var(--deep-espresso)] mb-4"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {title}
        </h1>
        <p className="text-[var(--charcoal)] mb-8">
          This page is coming soon.
        </p>
        <a
          href="/"
          className="inline-flex items-center px-6 py-3 bg-[var(--champagne-gold)] text-[var(--deep-espresso)] text-sm"
        >
          Return Home
        </a>
      </div>
    </main>
  );
}

export default App;
