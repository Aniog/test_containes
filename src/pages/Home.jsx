import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Products from '../components/home/Products';
import About from '../components/home/About';
import ContactCTA from '../components/home/ContactCTA';

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    // We wrap all subcomponents in a single container.
    // Call loadImages to process all data-strk-img and data-strk-bg elements.
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <Hero />
      <Features />
      <Products />
      <About />
      <ContactCTA />
    </div>
  );
}