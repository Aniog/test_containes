import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../strk-img-config.json';
import HeroSection from '../components/home/HeroSection';
import TrustBar from '../components/home/TrustBar';
import BestsellersGrid from '../components/home/BestsellersGrid';
import UgcRow from '../components/home/UgcRow';
import CategoriesSection from '../components/home/CategoriesSection';
import BrandStory from '../components/home/BrandStory';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);
  
  return (
    <div ref={containerRef}>
      <HeroSection />
      <TrustBar />
      <BestsellersGrid />
      <UgcRow />
      <CategoriesSection />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
