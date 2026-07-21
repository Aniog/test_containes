import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from './strk-img-config.json';
import { CartProvider } from './context/CartContext';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import CartDrawer from './components/layout/CartDrawer';
import Hero from './components/home/Hero';
import TrustBar from './components/home/TrustBar';
import Bestsellers from './components/home/Bestsellers';
import UGCSection from './components/home/UGCSection';
import CategoryTiles from './components/home/CategoryTiles';
import BrandStory from './components/home/BrandStory';
import Testimonials from './components/home/Testimonials';
import Newsletter from './components/home/Newsletter';
import ShopPage from './components/shop/ShopPage';
import ProductDetail from './components/product/ProductDetail';

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <UGCSection />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </>
  );
}

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    if (appRef.current) {
      return ImageHelper.loadImages(strkImgConfig, appRef.current);
    }
  }, []);

  return (
    <Router>
      <CartProvider>
        <div ref={appRef} className="min-h-screen bg-charcoal flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
