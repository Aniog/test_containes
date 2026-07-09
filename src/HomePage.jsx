import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from './strk-img-config.json';
import HomeHero from './HomeHero.jsx';
import TrustBar from './TrustBar.jsx';
import Bestsellers from './Bestsellers.jsx';
import UgcReel from './UgcReel.jsx';
import CategoryTiles from './CategoryTiles.jsx';
import BrandStory from './BrandStory.jsx';
import Testimonials from './Testimonials.jsx';
import Newsletter from './Newsletter.jsx';

export default function HomePage() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      <HomeHero />
      <TrustBar />
      <Bestsellers />
      <UgcReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
