import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="product/:slug" element={<ProductDetail />} />
            <Route path="collections" element={<Shop />} />
            <Route path="about" element={<ComingSoon title="Our Story" />} />
            <Route path="journal" element={<ComingSoon title="Journal" />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

function ComingSoon({ title }) {
  return (
    <div className="min-h-screen bg-sand pt-24 flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-serif text-3xl md:text-4xl text-espresso mb-4">{title}</h1>
        <p className="text-stone mb-8">This page is coming soon.</p>
        <a
          href="/"
          className="inline-block px-8 py-3 bg-gold text-white text-sm font-medium tracking-wider uppercase hover:bg-gold-light transition-colors"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen bg-sand pt-24 flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-serif text-6xl text-gold mb-4">404</h1>
        <p className="text-xl text-espresso mb-8">Page not found</p>
        <a
          href="/"
          className="inline-block px-8 py-3 bg-gold text-white text-sm font-medium tracking-wider uppercase hover:bg-gold-light transition-colors"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}

export default App;
