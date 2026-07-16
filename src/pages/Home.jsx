import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

import HomeHero from '../components/home/HomeHero';
import TrustBar from '../components/home/TrustBar';
import Bestsellers from '../components/home/Bestsellers';
import UgcReels from '../components/home/UgcReels';
import CategoryTiles from '../components/home/CategoryTiles';
import BrandStory from '../components/home/BrandStory';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // If the ImageHelper doesn't throw, we load images. 
    // We only load images on mount for this static layout.
    try {
      if (strkImgConfig) {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
      }
    } catch (e) {
      console.warn("strkImgConfig not available or ImageHelper error", e);
    }
  }, []);

  return (
    <div ref={containerRef}>
      <HomeHero />
      <TrustBar />
      <Bestsellers />
      <CategoryTiles />
      <UgcReels />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;