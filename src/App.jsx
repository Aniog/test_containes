import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navigation from './components/layout/Navigation';
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
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/collection" element={<Collection />} />
              {/* Placeholder routes */}
              <Route path="/about" element={<ComingSoon title="About Us" />} />
              <Route path="/journal" element={<ComingSoon title="Journal" />} />
              <Route path="/contact" element={<ComingSoon title="Contact" />} />
              <Route path="/shipping" element={<ComingSoon title="Shipping & Returns" />} />
              <Route path="/faq" element={<ComingSoon title="FAQs" />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

// Placeholder for pages not yet implemented
function ComingSoon({ title }) {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 md:pt-20">
      <div className="text-center">
        <h1 className="font-serif text-3xl text-[var(--color-text)] mb-4">{title}</h1>
        <p className="text-[var(--color-text-secondary)]">Coming soon...</p>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 md:pt-20">
      <div className="text-center">
        <h1 className="font-serif text-6xl text-[var(--color-text)] mb-4">404</h1>
        <p className="text-[var(--color-text-secondary)] mb-8">Page not found</p>
        <a href="/" className="btn-primary">Go Home</a>
      </div>
    </div>
  );
}

export default App;
