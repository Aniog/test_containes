import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from './strk-img-config.json';
import RootLayout from './components/layout/RootLayout';
import Home from './pages/Home';
import Collections from './pages/Collections';
import Product from './pages/Product';
import { CartProvider } from './store/CartContext';
import './index.css';

// Automatically load images and scroll to top on route turn
const PageWrapper = ({ children }) => {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (containerRef.current) {
        // Need to give a bit of time for dom to paint, so loadImages can find elements
        const frameId = window.requestAnimationFrame(() => {
           ImageHelper.loadImages(strkImgConfig, containerRef.current);
        });
        return () => window.cancelAnimationFrame(frameId);
    }
  }, [location.pathname]);

  return <div ref={containerRef} className="w-full h-full flex flex-col flex-1">{children}</div>;
};

function App() {
  return (
    <CartProvider>
      <Router>
        <RootLayout>
          <PageWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/product/:id" element={<Product />} />
            </Routes>
          </PageWrapper>
        </RootLayout>
      </Router>
    </CartProvider>
  );
}

export default App
