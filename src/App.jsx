import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from '@/contexts/CartContext';
import Navbar from '@/components/Navbar';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import ProductImageRegistry from '@/components/ProductImageRegistry';
import ImageLoader from '@/components/ImageLoader';
import Home from '@/pages/Home';
import Collection from '@/pages/Collection';
import ProductDetail from '@/pages/ProductDetail';
import About from '@/pages/About';
import Journal from '@/pages/Journal';
import JournalPost from '@/pages/JournalPost';
import Support from '@/pages/Support';
import NotFound from '@/pages/NotFound';

function AppContent() {
  const location = useLocation();

  return (
    <ImageLoader deps={[location.pathname, location.search]}>
      <div className="min-h-screen bg-cream text-espresso font-sans">
        <Navbar />
        <CartDrawer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Collection />} />
          <Route path="/collections" element={<Collection />} />
          <Route path="/collections/:category" element={<Collection />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:postId" element={<JournalPost />} />
          <Route path="/shipping" element={<Support />} />
          <Route path="/care" element={<Support />} />
          <Route path="/faq" element={<Support />} />
          <Route path="/contact" element={<Support />} />
          <Route path="/sustainability" element={<Support />} />
          <Route path="/careers" element={<Support />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ProductImageRegistry />
      </div>
    </ImageLoader>
  );
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App
