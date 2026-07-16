import React from 'react';
import HomeHero from '@/components/home/HomeHero';
import TrustBar from '@/components/home/TrustBar';
import Bestsellers from '@/components/home/Bestsellers';
import UGCReels from '@/components/home/UGCReels';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';

const Home = () => {
  return (
    <div>
      <HomeHero />
      <TrustBar />
      <Bestsellers />
      <div className="py-12 bg-background flex flex-col items-center">
        <h2 className="text-sm uppercase tracking-[0.3em] text-accent mb-8 font-bold">Worn By You</h2>
        <UGCReels />
      </div>
      <CategoryTiles />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
