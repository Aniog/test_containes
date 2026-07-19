import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import ShopPage from './pages/ShopPage';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from './strk-img-config.json';

const AboutPage = () => (
  <div className="container-responsive py-32 text-center">
    <h1 className="font-serif text-4xl md:text-5xl font-light mb-4">Our Story</h1>
    <p className="text-muted-foreground max-w-2xl mx-auto">
      Learn more about Velmora Fine Jewelry, our commitment to quality, and our mission to create 
      timeless pieces that celebrate your unique story.
    </p>
  </div>
);

const JournalPage = () => (
  <div className="container-responsive py-32 text-center">
    <h1 className="font-serif text-4xl md:text-5xl font-light mb-4">Journal</h1>
    <p className="text-muted-foreground max-w-2xl mx-auto">
      Discover styling tips, jewelry care guides, and stories from our community.
    </p>
  </div>
);

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    // Load images when the app mounts
    if (appRef.current) {
      const cleanup = ImageHelper.loadImages(strkImgConfig, appRef.current);
      return cleanup;
    }
  }, []);

  return (
    <CartProvider>
      <Router>
        <div ref={appRef} className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/journal" element={<JournalPage />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
