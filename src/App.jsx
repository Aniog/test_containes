import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Nav from '@/components/layout/Nav';
import CartDrawer from '@/components/layout/CartDrawer';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';

function AppInner() {
  const location = useLocation();

  // Expose navigate for the preview bridge
  if (typeof window !== 'undefined') {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, opts) => {
      window.history[opts?.replace ? 'replaceState' : 'pushState']({}, '', path);
      window.dispatchEvent(new PopStateEvent('popstate', { state: {} }));
    };
  }

  return (
    <div className="min-h-screen bg-ivory flex flex-col">
      <Nav />
      <CartDrawer />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <CartProvider>
        <AppInner />
      </CartProvider>
    </Router>
  );
}

export default App;
