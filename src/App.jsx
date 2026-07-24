import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import Product from './pages/Product.jsx';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import './App.css';

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Load images on initial render and route changes are handled by the fact that
    // this component stays mounted but we might need to re-run it if content changes.
    // However, the helper usually scans the whole subtree.
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    return cleanup;
  }, []);

  return (
    <Router>
      <div ref={containerRef}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
