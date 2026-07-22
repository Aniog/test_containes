import React, { useEffect, useRef } from 'react';
import Hero from '../components/home/Hero.jsx';
import TrustBar from '../components/home/TrustBar.jsx';
import Bestsellers from '../components/home/Bestsellers.jsx';
import UgcReels from '../components/home/UgcReels.jsx';
import CategoryTiles from '../components/home/CategoryTiles.jsx';
import BrandStory from '../components/home/BrandStory.jsx';
import Testimonials from '../components/home/Testimonials.jsx';
import Newsletter from '../components/home/Newsletter.jsx';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="animate-in fade-in duration-1000">
      <Hero />
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
