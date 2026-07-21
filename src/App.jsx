import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navigation from './components/ui/Navigation';
import CartDrawer from './components/ui/CartDrawer';
import Footer from './components/ui/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/about" element={<ComingSoon title="Our Story" />} />
              <Route path="/journal" element={<ComingSoon title="Journal" />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

function ComingSoon({ title }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream pt-20">
      <div className="text-center">
        <h1 className="font-serif text-3xl text-charcoal">{title}</h1>
        <p className="mt-4 text-taupe font-sans">Coming soon...</p>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream pt-20">
      <div className="text-center">
        <h1 className="font-serif text-4xl text-charcoal">404</h1>
        <p className="mt-4 text-taupe font-sans">Page not found</p>
        <a href="/" className="mt-4 inline-block text-sm font-sans text-charcoal underline hover:text-gold-700">
          Return Home
        </a>
      </div>
    </div>
  );
}

export default App;
