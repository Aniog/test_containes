import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import BestsellersSection from '../components/home/BestsellersSection';
import UgcReels from '../components/home/UgcReels';
import CategoryTiles from '../components/home/CategoryTiles';
import BrandStory from '../components/home/BrandStory';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, heroRef.current);
  }, []);

  return (
    <div ref={heroRef}>
      <HeroSection />
      <TrustBar />
      <BestsellersSection />
      <UgcReels />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
