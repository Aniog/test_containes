import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/layout/CartDrawer';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import Placeholder from '@/pages/Placeholder';

function ImageLoader({ children }) {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [location.pathname, location.search]);

  return <div ref={containerRef}>{children}</div>;
}

function AppRoutes() {
  return (
    <ImageLoader>
      <Navbar />
      <CartDrawer />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route
            path="/collections"
            element={
              <Placeholder
                title="Collections"
                subtitle="Curated drops and seasonal edits coming soon."
              />
            }
          />
          <Route
            path="/about"
            element={
              <Placeholder
                title="Our Story"
                subtitle="Learn more about Velmora's journey and craftsmanship philosophy."
              />
            }
          />
          <Route
            path="/journal"
            element={
              <Placeholder
                title="Journal"
                subtitle="Style guides, behind-the-scenes, and jewelry care tips."
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </ImageLoader>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-base text-cream">
          <AppRoutes />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App
