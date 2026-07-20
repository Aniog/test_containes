import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import { ToastProvider } from '@/components/ui/Toast';
import Layout from '@/components/layout/Layout';
import ScrollToTop from '@/components/ui/ScrollToTop';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import About from '@/pages/About';
import Journal from '@/pages/Journal';
import NotFound from '@/pages/NotFound';

// Listen for cross-frame route changes from the Strikingly preview bridge.
function PreviewRouterBridge() {
  useEffect(() => {
    function onMsg(event) {
      const data = event.data;
      if (!data || data.channel !== 'strikingly-preview' || data.version !== 1) return;
      if (data.type !== 'route:navigate') return;
      const path = data.payload?.path;
      if (typeof path !== 'string' || !path) return;
      const replace = Boolean(data.payload?.replace);
      if (replace) window.history.replaceState({}, '', path);
      else window.history.pushState({}, '', path);
      window.dispatchEvent(new PopStateEvent('popstate', { state: {} }));
    }
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, []);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <CartProvider>
          <Layout>
            <PreviewRouterBridge />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/collections/:category" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/journal/:id" element={<Journal />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </CartProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
