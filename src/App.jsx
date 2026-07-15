import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import { Toaster } from 'sonner';
import Layout from '@/Layout';
import HomePage from '@/pages/HomePage';
import ShopPage from '@/pages/ShopPage';
import ProductPage from '@/pages/ProductPage';
import './App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/about" element={<AboutPlaceholder />} />
            <Route path="/journal" element={<JournalPlaceholder />} />
          </Routes>
        </Layout>
        <Toaster position="bottom-right" />
      </CartProvider>
    </Router>
  );
}

function AboutPlaceholder() {
  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-cream flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">Our Story</h1>
        <p className="text-taupe max-w-lg mx-auto leading-relaxed">
          Velmora was born from a simple belief: luxury shouldn't be reserved for special occasions. 
          We create demi-fine jewelry that bridges the gap between everyday wear and heirloom quality.
        </p>
      </div>
    </div>
  );
}

function JournalPlaceholder() {
  return (
    <div className="pt-20 md:pt-24 min-h-screen bg-cream flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">Journal</h1>
        <p className="text-taupe max-w-lg mx-auto leading-relaxed">
          Styling tips, behind-the-scenes stories, and the inspiration behind our collections.
        </p>
      </div>
    </div>
  );
}

export default App;
