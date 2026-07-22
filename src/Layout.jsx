import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import { products } from './data/products.js';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Layout = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-brand-cream text-brand-charcoal font-sans selection:bg-brand-gold selection:text-white">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
      <CartDrawer />

      {/* Hidden pre-resolver for build-time stock image resolution */}
      <div className="hidden pointer-events-none" aria-hidden="true" style={{ display: 'none' }}>
        {products.map(product => (
          <div key={product.id}>
            <img data-strk-img-id={`best-${product.id}-1`} data-strk-img={`${product.name} gold luxury jewelry`} />
            <img data-strk-img-id={`best-${product.id}-2`} data-strk-img={`${product.name} jewelry detail`} />
            <img data-strk-img-id={`shop-${product.id}`} data-strk-img={`${product.name} editorial photography`} />
            <img data-strk-img-id={`pdp-main-${product.id}`} data-strk-img={`${product.name} model portrait luxury`} />
            <img data-strk-img-id={`cart-img-${product.id}`} data-strk-img={`${product.name} white background luxury`} />
            <img data-strk-img-id={`pdp-suggested-${product.id}`} data-strk-img={`${product.name} gold luxury recommendation`} />
            {[1, 2, 3, 4].map(idx => (
              <img key={idx} data-strk-img-id={`pdp-thumb-${product.id}-${idx}`} data-strk-img={`${product.name} detail view ${idx}`} />
            ))}
          </div>
        ))}
        {/* Category images */}
        <img data-strk-img-id="cat-img-cat-earrings" data-strk-img="Earrings luxury gold jewelry" />
        <img data-strk-img-id="cat-img-cat-necklaces" data-strk-img="Necklaces luxury gold jewelry" />
        <img data-strk-img-id="cat-img-cat-huggies" data-strk-img="Huggies luxury gold jewelry" />
        {/* UGC Reels */}
        {[1, 2, 3, 4, 5, 6].map(i => (
          <img key={i} data-strk-img-id={`ugc-${i}`} data-strk-img={`Lifestyle jewelry social media ${i}`} />
        ))}
        {/* Hero & Story */}
        <div data-strk-bg-id="hero-bg-velmora" data-strk-bg="Velmora luxury jewelry brand hero" />
        <img data-strk-img-id="story-img" data-strk-img="Velmora brand heritage craftsmanship" />
      </div>
    </div>
  );
};

export default Layout;
