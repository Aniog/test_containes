import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
            <Route path="collections" element={<Shop />} />
            <Route path="product/:slug" element={<ProductDetail />} />
            <Route path="about" element={<ComingSoon title="About Us" />} />
            <Route path="journal" element={<ComingSoon title="Journal" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

function ComingSoon({ title }) {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center">
        <h1 className="heading-2 text-charcoal mb-4">{title}</h1>
        <p className="text-charcoal-light mb-8">
          This page is coming soon. Check back soon!
        </p>
        <a href="/" className="btn-primary">
          Return Home
        </a>
      </div>
    </div>
  );
}

export default App;
