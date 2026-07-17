import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="collections" element={<Shop />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="about" element={<div className="pt-32 pb-section"><div className="max-w-3xl mx-auto px-4 text-center"><h1 className="font-serif text-section mb-6">Our Story</h1><p className="text-velmora-text-secondary">Coming soon...</p></div></div>} />
            <Route path="journal" element={<div className="pt-32 pb-section"><div className="max-w-3xl mx-auto px-4 text-center"><h1 className="font-serif text-section mb-6">Journal</h1><p className="text-velmora-text-secondary">Coming soon...</p></div></div>} />
            <Route path="contact" element={<div className="pt-32 pb-section"><div className="max-w-3xl mx-auto px-4 text-center"><h1 className="font-serif text-section mb-6">Contact Us</h1><p className="text-velmora-text-secondary">Coming soon...</p></div></div>} />
            <Route path="shipping-returns" element={<div className="pt-32 pb-section"><div className="max-w-3xl mx-auto px-4 text-center"><h1 className="font-serif text-section mb-6">Shipping & Returns</h1><p className="text-velmora-text-secondary">Coming soon...</p></div></div>} />
            <Route path="care-guide" element={<div className="pt-32 pb-section"><div className="max-w-3xl mx-auto px-4 text-center"><h1 className="font-serif text-section mb-6">Care Guide</h1><p className="text-velmora-text-secondary">Coming soon...</p></div></div>} />
            <Route path="faq" element={<div className="pt-32 pb-section"><div className="max-w-3xl mx-auto px-4 text-center"><h1 className="font-serif text-section mb-6">FAQ</h1><p className="text-velmora-text-secondary">Coming soon...</p></div></div>} />
            <Route path="sustainability" element={<div className="pt-32 pb-section"><div className="max-w-3xl mx-auto px-4 text-center"><h1 className="font-serif text-section mb-6">Sustainability</h1><p className="text-velmora-text-secondary">Coming soon...</p></div></div>} />
            <Route path="press" element={<div className="pt-32 pb-section"><div className="max-w-3xl mx-auto px-4 text-center"><h1 className="font-serif text-section mb-6">Press</h1><p className="text-velmora-text-secondary">Coming soon...</p></div></div>} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
