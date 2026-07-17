import React, { useRef, useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import Bestsellers from '../components/home/Bestsellers';
import UGCReel from '../components/home/UGCReel';
import CategoryTiles from '../components/home/CategoryTiles';
import BrandStory from '../components/home/BrandStory';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';

export default function HomePage() {
  const pageRef = useRef(null);

  useEffect(() => {
    if (pageRef.current) {
      return ImageHelper.loadImages(strkImgConfig, pageRef.current);
    }
  }, []);

  return (
    <main ref={pageRef}>
      <HeroSection />
      <TrustBar />
      <Bestsellers />
      <UGCReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
