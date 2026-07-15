import React, { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import Bestsellers from '@/components/home/Bestsellers';
import UGCReel from '@/components/home/UGCReel';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';

const Home = () => {
  const bestsellersRef = useRef(null);

  useEffect(() => {
    if (bestsellersRef.current) {
      return ImageHelper.loadImages(strkImgConfig, bestsellersRef.current);
    }
  }, []);

  return (
    <div>
      <Hero />
      <TrustBar />
      <div ref={bestsellersRef}>
        <Bestsellers />
      </div>
      <UGCReel />
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
