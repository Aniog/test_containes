import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Toaster } from "@/components/ui/sonner";

function App() {
  const containerRef = useRef(null);

  // We should render the image dynamically, wait we might not have `strk-img-config.json` yet
  // so I will leave ImageHelper commented out first, wait, it requires strk-img-config.json.
  // Actually, I can just create a dummy strkImgConfig inside.

  return (
    <Router>
      <div ref={containerRef}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="product/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
