import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';
import HomePage from '@/pages/HomePage';
import ProductPage from '@/pages/ProductPage';
import CollectionPage from '@/pages/CollectionPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:slug" element={<ProductPage />} />
              <Route path="/collection" element={<CollectionPage />} />
              <Route path="/about" element={<ComingSoon title="About Us" />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
        <CartDrawer />
      </CartProvider>
    </BrowserRouter>
  );
}

function ComingSoon({ title }) {
  return (
    <main className="pt-20 md:pt-24 min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="font-serif text-3xl md:text-4xl text-[var(--color-charcoal)] mb-4">
          {title}
        </h1>
        <p className="text-[var(--color-stone)] mb-8">
          This page is coming soon.
        </p>
        <a href="/" className="btn-primary">
          Return Home
        </a>
      </div>
    </main>
  );
}

function NotFound() {
  return (
    <main className="pt-20 md:pt-24 min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="font-serif text-6xl md:text-8xl text-[var(--color-gold)] mb-4">
          404
        </h1>
        <p className="text-[var(--color-stone)] mb-8">
          The page you're looking for doesn't exist.
        </p>
        <a href="/" className="btn-primary">
          Return Home
        </a>
      </div>
    </main>
  );
}

export default App;
