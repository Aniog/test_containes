import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Layout from './Layout';
import Hero from './components/Hero';
import Products from './components/Products';
import Features from './components/Features';
import Contact from './components/Contact';

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
     return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <Layout>
      <div ref={containerRef} className="flex flex-col w-full">
        <Hero />
        <Products />
        <Features />
        <Contact />
      </div>
    </Layout>
  );
}

export default App;
