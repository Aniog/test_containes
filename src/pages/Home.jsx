import React from 'react';
import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import Bestsellers from '@/components/home/Bestsellers';
import UGCReels from '@/components/home/UGCReels';
import Categories from '@/components/home/Categories';
import BrandStory from '@/components/home/BrandStory';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';

const Home = () => {
  return (
    <div className="fade-in">
      <Hero />
      <TrustBar />
      <Categories />
      <Bestsellers />
      <BrandStory />
      <UGCReels />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
