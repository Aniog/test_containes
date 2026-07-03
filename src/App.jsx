import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/ui/CartDrawer';
import Homepage from './components/home/Homepage';
import CollectionPage from './components/collection/CollectionPage';
import ProductDetail from './components/product/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen flex flex-col bg-cream">
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop" element={<CollectionPage />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            {/* Placeholder routes for additional pages */}
            <Route path="/about" element={<ComingSoon title="Our Story" />} />
            <Route path="/journal" element={<ComingSoon title="Journal" />} />
            <Route path="/contact" element={<ComingSoon title="Contact Us" />} />
            <Route path="/shipping" element={<ComingSoon title="Shipping & Returns" />} />
            <Route path="/faq" element={<ComingSoon title="FAQ" />} />
            <Route path="/privacy" element={<ComingSoon title="Privacy Policy" />} />
            <Route path="/terms" element={<ComingSoon title="Terms of Service" />} />
            {/* Catch all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

// Placeholder component for pages not yet built
function ComingSoon({ title }) {
  return (
    <main className="flex-1 flex items-center justify-center bg-cream py-20">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="font-serif text-3xl text-charcoal mb-4">{title}</h1>
        <p className="font-sans text-softGray">
          This page is coming soon. In the meantime, feel free to explore our collection.
        </p>
      </div>
    </main>
  );
}

// 404 page
function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center bg-cream py-20">
      <div className="text-center">
        <h1 className="font-serif text-6xl text-charcoal mb-4">404</h1>
        <p className="font-sans text-softGray mb-8">
          The page you're looking for doesn't exist.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 font-sans text-sm text-charcoal 
                   hover:text-gold-500 transition-colors"
        >
          <span>Return Home</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </main>
  );
}

export default App;
