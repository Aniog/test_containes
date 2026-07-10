import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import { useImageLoader } from '@/hooks/useImageLoader';
import Navbar from '@/components/Navbar';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import About from '@/pages/About';

function MainContent({ children }) {
  const location = useLocation();
  const containerRef = useImageLoader([location.pathname]);

  return (
    <main ref={containerRef} className="flex-1">
      {children}
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-cream text-charcoal">
          <Navbar />
          <CartDrawer />
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/journal" element={<About />} />
            </Routes>
          </MainContent>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
