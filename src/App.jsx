import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="collections" element={<Shop />} />
            <Route path="product/:slug" element={<ProductDetail />} />
            <Route path="about" element={<ComingSoon title="Our Story" />} />
            <Route path="journal" element={<ComingSoon title="Journal" />} />
            <Route path="contact" element={<ComingSoon title="Contact Us" />} />
            <Route path="shipping" element={<ComingSoon title="Shipping & Returns" />} />
            <Route path="size-guide" element={<ComingSoon title="Size Guide" />} />
            <Route path="care" element={<ComingSoon title="Care Instructions" />} />
            <Route path="faq" element={<ComingSoon title="FAQ" />} />
            <Route path="sustainability" element={<ComingSoon title="Sustainability" />} />
            <Route path="press" element={<ComingSoon title="Press" />} />
            <Route path="careers" element={<ComingSoon title="Careers" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

function ComingSoon({ title }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-serif text-3xl mb-4">{title}</h1>
        <p className="text-secondary">Coming soon</p>
      </div>
    </div>
  );
}

export default App;
