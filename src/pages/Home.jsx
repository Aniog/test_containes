import React, { useEffect, useRef } from 'react';
import Hero from '@/components/home/Hero';
import Bestsellers from '@/components/home/Bestsellers';
import UGCReels from '@/components/home/UGCReels';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden">
      <Hero />
      <div className="bg-white py-4 border-y border-gold-100 flex justify-center items-center space-x-8 md:space-x-16 overflow-x-auto px-4 hide-scrollbar">
        {['Free Worldwide Shipping', '30-Day Returns', '18K Gold Plated', 'Hypoallergenic'].map((trust) => (
          <span key={trust} className="text-[10px] uppercase tracking-[0.2em] font-bold text-luxury-black/60 whitespace-nowrap">
            • {trust}
          </span>
        ))}
      </div>
      <Bestsellers />
      <UGCReels />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
