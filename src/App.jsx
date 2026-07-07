import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import Cart from '@/pages/Cart';
import About from '@/pages/About';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            {/* Placeholder routes */}
            <Route path="/journal" element={<PlaceholderPage title="Journal" />} />
            <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
            <Route path="/shipping" element={<PlaceholderPage title="Shipping & Returns" />} />
            <Route path="/faq" element={<PlaceholderPage title="FAQ" />} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  );
}

// Placeholder component for routes not yet implemented
function PlaceholderPage({ title }) {
  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-serif text-4xl text-espresso-900 mb-4">{title}</h1>
        <p className="text-taupe">This page is coming soon.</p>
      </div>
    </div>
  );
}

export default App;
