import React, { useEffect, useRef } from 'react';
import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import Bestsellers from '@/components/home/Bestsellers';
import UGCGrid from '@/components/home/UGCGrid';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    
    // Initial scan
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, pageRef.current);
    });
    
    // Rerun on interval just in case some images are slow to mount or dynamic
    const timer = setInterval(() => {
        ImageHelper.loadImages(strkImgConfig, pageRef.current);
    }, 2000);

    return () => {
        window.cancelAnimationFrame(frameId);
        clearInterval(timer);
    };
  }, []);

  return (
    <div ref={pageRef}>
      <Hero />
      <TrustBar />
      <Bestsellers />
      <CategoryTiles />
      <UGCGrid />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
