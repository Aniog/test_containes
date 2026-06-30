import React from 'react';
import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import Bestsellers from '@/components/home/Bestsellers';
import UGCReel from '@/components/home/UGCReel';
import Categories from '@/components/home/Categories';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <TrustBar />
      <Bestsellers />
      <Categories />
      <UGCReel />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
