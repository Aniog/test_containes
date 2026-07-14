import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Shop from '@/pages/Shop';
import ProductDetail from '@/pages/ProductDetail';
import About from '@/pages/About';
import { PRODUCTS } from '@/api/products';

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </Router>
      
      {/* Hidden discovery container for build-time image crawler */}
      <div className="hidden" aria-hidden="true">
        {PRODUCTS.map(product => (
          <div key={`discovery-${product.id}`}>
            <img data-strk-img-id={`cart-img-${product.imgId}`} data-strk-img={`[${product.titleId}] jewelry`} data-strk-img-ratio="3x4" />
            <img data-strk-img-id={`prod-main-${product.imgId}`} data-strk-img={`[${product.titleId}] gold jewelry`} data-strk-img-ratio="3x4" />
            <img data-strk-img-id={`prod-hover-${product.imgId}`} data-strk-img={`model wearing [${product.titleId}] jewelry gold`} data-strk-img-ratio="3x4" />
            <img data-strk-img-id={`pdp-main-${product.imgId}`} data-strk-img={`[pdp-desc] [pdp-name] jewelry gold high-end editorial`} data-strk-img-ratio="3x4" />
            <img data-strk-img-id={`pdp-extra-1-${product.imgId}`} data-strk-img={`[pdp-name] jewelry gold close-up detail`} data-strk-img-ratio="3x4" />
            <img data-strk-img-id={`pdp-extra-2-${product.imgId}`} data-strk-img={`[pdp-name] worn by model jewelry gold lifestyle`} data-strk-img-ratio="3x4" />
            <span id={product.titleId}>{product.name}</span>
          </div>
        ))}
      </div>
    </CartProvider>
  );
}

export default App;
