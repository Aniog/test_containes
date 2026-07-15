import React, { useEffect } from 'react';
import HomeHero from '@/components/home/HomeHero';
import Bestsellers from '@/components/home/Bestsellers';
import UGCRow from '@/components/home/UGCRow';
import CategoryTiles from '@/components/home/CategoryTiles';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      <HomeHero />
      <Bestsellers />
      <CategoryTiles />
      <BrandStory />
      <UGCRow />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
