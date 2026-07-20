import { useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from './strk-img-config.json';
import Layout from './Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import { Collections, About, Journal } from './pages/FallbackPages';

function App() {
  const containerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    return () => {
      if (typeof cleanup === 'function') cleanup();
    };
  }, [location.pathname, location.search]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div ref={containerRef}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="collections" element={<Collections />} />
          <Route path="about" element={<About />} />
          <Route path="journal" element={<Journal />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
