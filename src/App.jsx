import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/hooks/useCart';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import Collection from '@/pages/Collection';
import ProductDetail from '@/pages/ProductDetail';

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collections" element={<Collection />} />
            <Route path="/collections/:category" element={<Collection />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center pt-20">
                <div className="text-center">
                  <h1 className="font-serif text-4xl text-charcoal-800 mb-4">Page Not Found</h1>
                  <a href="/" className="text-gold-600 hover:text-gold-700">Return Home</a>
                </div>
              </div>
            } />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;
