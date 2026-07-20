import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import TrustBar from '@/components/home/TrustBar';
import BestsellersGrid from '@/components/home/BestsellersGrid';
import UGCReel from '@/components/home/UGCReel';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TrustBar />
      <BestsellersGrid />
      <CategoryTiles />
      <BrandStory />
      <UGCReel />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
