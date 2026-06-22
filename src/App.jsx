import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from './strk-img-config.json';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Discoveries from './components/Discoveries';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Check if the DOM contains elements with data-strk-img or data-strk-bg before calling 
    // ImageHelper to populate the stock images dynamically.
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans flex flex-col" ref={containerRef}>
      <Navigation />
      <Hero />
      <Discoveries />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
